const fs = require('fs')
const namehash = require('eth-ens-namehash').hash
const keccak256 = require('js-sha3').keccak_256

const daoFactoryMigration = require('@aragon/os/migrations/3_factory')
const MiniMeTokenFactory = artifacts.require('@aragon/os/contracts/lib/minime/MiniMeTokenFactory')
const ENS = artifacts.require('@aragon/os/contracts/lib/ens/ENS.sol')
const ScriptHelpers = artifacts.require('ScriptHelpers')
const EVMScriptRegistryFactory = artifacts.require('EVMScriptRegistryFactory')

const getContract = name => artifacts.require(name)

let contracts = {}


module.exports = async (deployer, network, accounts, arts = null) => {
  if (arts != null) artifacts = arts // allow running outside

  const bases = ['APMRegistry', 'Repo', 'ENSSubdomainRegistrar']
  const baseContracts = bases.map(getContract)

  await deployer.deploy(baseContracts)

  const baseDeployed = baseContracts.map(c => c.address)

  // TODO: Take into account networks with ENS deployed
  const ENSFactory = getContract('ENSFactory')
  await deployer.deploy(ENSFactory)

  const APMRegistryFactory = getContract('APMRegistryFactory')
  const ensAddr = '0x0' // so ensfactory creates one

  const kernelBase = await getContract('Kernel').new()
  contracts.kernelBase = kernelBase

  const aclBase = await getContract('ACL').new()
  contracts.aclBase = aclBase

  const daoFactory = await getContract('DAOFactory').new(kernelBase.address, aclBase.address, "0x00")
  contracts.daoFactory = daoFactory

  await deployer.deploy(APMRegistryFactory, daoFactory.address, ...baseDeployed, ensAddr, ENSFactory.address)
  const apmFactory = await APMRegistryFactory.deployed()
  contracts.apmFactory = apmFactory

  console.log('Deploying APM...')
  const root = '0xffffffffffffffffffffffffffffffffffffffff' // public
  const receipt1 = await apmFactory.newAPM(namehash('eth'), '0x'+keccak256('aragonpm'), root)
  const apmAddr = receipt1.logs.filter(l => l.event == 'DeployAPM')[0].args.apm
  console.log('Deployed APM at:', apmAddr)

  const apm = getContract('APMRegistry').at(apmAddr)
  contracts.apm = apm
  console.log('Kernel:', await apm.kernel())

  const ensSub = getContract('ENSSubdomainRegistrar').at(await apm.registrar())
  console.log('ENS:', await ensSub.ens())
  contracts.ens = ENS.at(await ensSub.ens())

  const receipt2 = await daoFactory.newDAO(accounts[0])
  daoAddr = receipt2.logs.filter(l => l.event == 'DeployDAO')[0].args.dao
  console.log('deployed DAO at', daoAddr)
  contracts.dao = getContract('Kernel').at(daoAddr)

  await deployer.deploy(ScriptHelpers)
  await deployer.link(ScriptHelpers, EVMScriptRegistryFactory)

  const templates = ['Etheem']

  // ensure alphabetic order
  const apps = ['finance', 'token-manager', 'vault', 'voting']

  const appIds = apps.map(app => namehash(require(`@aragon/apps-${app}/arapp`).appName))

  const deployMany = async (cs, params) => {
    const x = await Promise.all(cs.map(c => artifacts.require(c).new(...params)))

    return x.map(c => c.address)
  }

  const newRepo = async (apm, name, acc, contract) => {
    const c = await artifacts.require(contract).new()
    return await apm.newRepoWithVersion(name, acc, [1, 0, 0], c.address, '0x1245')
  }

  let indexObj = require('../truffle.js')
  const ens = await ENS.new()

  if (network == 'rpc' /*TODO!*/ || network == 'devnet') { // Useful for testing to avoid manual deploys with aragon-dev-cli
    if (await ens.owner(appIds[0]) == '0x0000000000000000000000000000000000000000') {
      const apm = contracts.apm

      await newRepo(apm, 'voting', accounts[0], 'Voting')
      await newRepo(apm, 'finance', accounts[0], 'Finance')
      await newRepo(apm, 'token-manager', accounts[0], 'TokenManager')
      await newRepo(apm, 'vault', accounts[0], 'Vault')
    }

  }

  const minimeFac = await MiniMeTokenFactory.new()

  const aragonid = await ens.owner(namehash('aragonid.eth'))
  const tmpls = await deployMany(templates, [daoFactory.address, minimeFac.address, apmAddr, aragonid, appIds])

  const ts = tmpls.map((address, i) => ({ name: templates[i], address }) )

  console.log('creating APM packages for templates')

  await apm.newRepoWithVersion('etheem', accounts[0], [1, 0, 0], tmpls[0], 'ipfs:')

  console.log(ts)

  if (indexObj.networks[network] === undefined)
    indexObj.networks[network] = {}
  indexObj.networks[network].ens = ens
  indexObj.networks[network].templates = ts
  const indexFile = 'module.exports = ' + JSON.stringify(indexObj, null, 2)
  // could also use https://github.com/yeoman/stringify-object if you wanted single quotes
  if (network != 'rpc' && network != 'devnet') {
    fs.writeFileSync('index.js', indexFile)
    console.log('Template addresses saved to index.js')
  } else {
    fs.writeFileSync('index_local.js', indexFile)
    console.log('Template addresses saved to index_local.js')
  }
}
