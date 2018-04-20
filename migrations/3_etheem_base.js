const EtheemBase = artifacts.require("./EtheemBase.sol");
const MiniMeToken = artifacts.require("@aragon/os/contracts/lib/minime/MiniMeToken.sol");
const CentralizedOracleFactory = artifacts.require("CentralizedOracleFactory.sol");
const EventFactory = artifacts.require("EventFactory.sol");
const StandardMarketFactory = artifacts.require("StandardMarketFactory.sol");
const LMSRMarketMaker = artifacts.require("LMSRMarketMaker.sol");
const MathLibrary = artifacts.require('Math')

module.exports = async (deployer, network, accounts, arts = null) => {
  let etheem, token
  let eventFactory, marketFactory, marketMaker, oracleFactory;
  const owner = accounts[0];

  oracleFactory = await CentralizedOracleFactory.deployed();
  eventFactory = await EventFactory.deployed();
  marketFactory = await StandardMarketFactory.deployed();
  marketMaker = await LMSRMarketMaker.deployed();

  deployer.deploy(EtheemBase)
    .then(() => EtheemBase.deployed())
    .then((_etheem) => {
      etheem = _etheem;
    }).then(() => deployer.deploy(MiniMeToken,
      0,
      0,
      0,
      "Etheem Base Token",
      18,
      "EBT",
      true
    )).then(() => MiniMeToken.deployed())
      .then(async (_token) => {
      token = _token;


      await etheem.setContracts(
        token.address,
        eventFactory.address,
        marketFactory.address,
        marketMaker.address,
        oracleFactory.address,
      );

      await token.generateTokens(owner, 1000e18);
    })

}
