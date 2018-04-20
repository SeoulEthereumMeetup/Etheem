const assert = require('assert');
const fs = require('fs')
const namehash = require('eth-ens-namehash').hash
const keccak256 = require('js-sha3').keccak_256

const daoFactoryMigration = require('@aragon/os/migrations/3_factory')
const MiniMeTokenFactory = artifacts.require('@aragon/os/contracts/lib/minime/MiniMeTokenFactory')
const MiniMeToken = artifacts.require('@aragon/os/contracts/lib/minime/MiniMeToken.sol')
const ENS = artifacts.require('@aragon/os/contracts/lib/ens/ENS.sol')
const ScriptHelpers = artifacts.require('ScriptHelpers')
const EVMScriptRegistryFactory = artifacts.require('EVMScriptRegistryFactory')
const Etheem = artifacts.require('Etheem.sol')
const EtheemFactory = artifacts.require('EtheemFactory.sol')
const PublicResolver = artifacts.require('PublicResolver.sol')
const FIFSResolvingRegistrar = artifacts.require('FIFSResolvingRegistrar')

const getContract = name => artifacts.require(name)

const tld = namehash('eth')
const aragonIDLabel = '0x'+keccak256('aragonid')
const aragonIDNode = namehash('aragonid.eth')
const apmLabel = '0x'+keccak256('aragonpm')
const apmNode = namehash('aragonpm.eth')

let contracts = {}
let receipt;

module.exports = async (deployer, network, accounts, arts = null) => {
  return;
  if (arts != null) artifacts = arts // allow running outside

  const bases = ['APMRegistry', 'Repo', 'ENSSubdomainRegistrar']
  const baseContracts = bases.map(getContract)

  await deployer.deploy(baseContracts)

  const baseDeployed = baseContracts.map(c => c.address)

  // TODO: Take into account networks with ENS deployed
  const ENSFactory = getContract('ENSFactory')
  await deployer.deploy(ENSFactory)

  const ensFactory = await ENSFactory.deployed()

  // setup ens
  // receipt = await ensFactory.newENS(accounts[0])
  // const ensAddr = receipt.logs.filter(l => l.event == 'DeployENS')[0].args.ens
  // const ens = ENS.at(ensAddr)
  // console.log("ENS Deployed at", ensAddr)
  //
  // const resolverAddr = await ens.resolver(namehash('resolver.eth'))
  // const publicResolver = PublicResolver.at(resolverAddr)

  // setup aragon-id
  // const aragonID = await FIFSResolvingRegistrar.new(ensAddr, resolverAddr, aragonIDNode)
  // console.log("aragonID deployed at", aragonID.address)
  // await ens.setSubnodeOwner(tld, aragonIDLabel, aragonID.address)
  // await ens.setOwner(aragonIDNode, aragonID.address)
  // await ens.setOwner(tld, aragonID.address)

  // console.log('assigning owner name')
  // await aragonID.register('0x'+keccak256('owner'), accounts[0])

  const APMRegistryFactory = getContract('APMRegistryFactory')

  const kernelBase = await getContract('Kernel').new()
  contracts.kernelBase = kernelBase

  const aclBase = await getContract('ACL').new()
  contracts.aclBase = aclBase

  const daoFactory = await getContract('DAOFactory').new(kernelBase.address, aclBase.address, "0x00")
  contracts.daoFactory = daoFactory

  await deployer.deploy(APMRegistryFactory, daoFactory.address, ...baseDeployed, 0x00, ENSFactory.address)
  const apmFactory = await APMRegistryFactory.deployed()
  contracts.apmFactory = apmFactory

  // link apmFactory to ens
  // await ens.setSubnodeOwner(tld, apmLabel, apmFactory.address)
  // await ens.setOwner(apmNode, apmFactory.address)

  console.log('Deploying APM...')
  const root = '0xffffffffffffffffffffffffffffffffffffffff' // public
  const receipt1 = await apmFactory.newAPM(tld, apmLabel, root)
  const apmAddr = receipt1.logs.filter(l => l.event == 'DeployAPM')[0].args.apm
  console.log('Deployed APM at:', apmAddr)

  const apm = getContract('APMRegistry').at(apmAddr)
  contracts.apm = apm
  console.log('Kernel:', await apm.kernel())

  const ensSub = getContract('ENSSubdomainRegistrar').at(await apm.registrar())
  console.log('ENS:', await ensSub.ens())
  contracts.ens = ENS.at(await ensSub.ens())
  const ensAddr = contracts.ens.address

  const resolverAddr = await contracts.ens.resolver(namehash("resolver.eth"));
  console.log("resolverAddr", resolverAddr)

  const aragonid = await FIFSResolvingRegistrar.new(ensAddr, resolverAddr, aragonIDNode)
  // await contracts.ens.setOwner(aragonIDNode, aragonid.address)


  const receipt2 = await daoFactory.newDAO(accounts[0])
  daoAddr = receipt2.logs.filter(l => l.event == 'DeployDAO')[0].args.dao
  console.log('deployed DAO at', daoAddr)
  contracts.dao = getContract('Kernel').at(daoAddr)

  await deployer.deploy(ScriptHelpers)
  await deployer.link(ScriptHelpers, EVMScriptRegistryFactory)

  const templates = ['EtheemFactory']

  // ensure alphabetic order
  const apps = ['finance', 'token-manager', 'vault', 'voting']
  const etheemApps = ['Etheem']

  const appIds = apps.map(app => namehash(require(`@aragon/apps-${app}/arapp`).appName))
    .concat(etheemApps.map(app => namehash(require(`../arapp`).appName)))

  console.log("appIds", JSON.stringify(appIds, null, 2))

  const deployMany = async (cs, params) => {
    const x = await Promise.all(cs.map(c => artifacts.require(c).new(...params)))

    return x.map(c => c.address)
  }

  const newRepo = async (apm, name, acc, contract) => {
    console.log(`newRepo(${contract})`)
    const c = await artifacts.require(contract).new()
    return await apm.newRepoWithVersion(name, acc, [1, 0, 0], c.address, '0x1245')
  }

  let indexObj = require('../truffle.js')

  console.log("Deploying aragon apps...")
  await newRepo(apm, 'voting', accounts[0], 'Voting')
  await newRepo(apm, 'finance', accounts[0], 'Finance')
  await newRepo(apm, 'token-manager', accounts[0], 'TokenManager')
  await newRepo(apm, 'vault', accounts[0], 'Vault')
  await newRepo(apm, 'etheem', accounts[0], 'Etheem')
  console.log("Deployed aragon apps")

  const minimeFac = await MiniMeTokenFactory.new()

  const tmpls = await deployMany(templates, [daoFactory.address, minimeFac.address, apmAddr, aragonid.address, appIds])

  const ts = tmpls.map((address, i) => ({ name: templates[i], address }) )

  console.log('creating APM packages for templates')

  await apm.newRepoWithVersion('etheemFactory', accounts[0], [1, 0, 0], ts[0].address, 'ipfs:')

  console.log(ts)

  const etheemFactory = EtheemFactory.at(ts[0].address)

  const receipt3 = await etheemFactory.newToken("EtheemToken", "ETT")
  const tokenAddr = receipt3.logs.filter(l => l.event == 'DeployToken')[0].args.token
  console.log("Token deployed at", tokenAddr)

  const receipt4 = await etheemFactory.newInstance(
    appIds[4],
    // appIds[4],
    accounts.slice(0, 10),
    accounts.slice(0, 10).map(_ => 100e18)
  )

  const etheemAddr = receipt4.logs.filter(l =>
    l.event === 'InstalledApp' &&
    l.args.appId === appIds[4]
  )[0].args.appProxy

  console.log("Etheem deployed at", etheemAddr)

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
