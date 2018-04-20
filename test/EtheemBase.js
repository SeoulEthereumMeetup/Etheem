import bs58 from "bs58";
import ether from "./helpers/ether";
import advanceToBlock, { advanceBlock } from "./helpers/advanceToBlock";
import increaseTime, { increaseTimeTo, duration } from "./helpers/increaseTime";
import latestTime from "./helpers/latestTime";
import EVMThrow from "./helpers/EVMThrow";
import { capture, restore, Snapshot } from "./helpers/snapshot";
import timer from "./helpers/timer";
import sendTransaction from "./helpers/sendTransaction";
import "./helpers/upgradeBigNumber";

const BigNumber = web3.BigNumber;
const eth = web3.eth;

const should = require("chai")
  .use(require("chai-as-promised"))
  .use(require("chai-bignumber")(BigNumber))
  .should();


const EtheemBase = artifacts.require("./EtheemBase.sol");
const MiniMeToken = artifacts.require("@aragon/os/contracts/lib/minime/MiniMeToken.sol");
const CentralizedOracleFactory = artifacts.require("CentralizedOracleFactory.sol");
const EventFactory = artifacts.require("EventFactory.sol");
const StandardMarketFactory = artifacts.require("StandardMarketFactory.sol");
const LMSRMarketMaker = artifacts.require("LMSRMarketMaker.sol");
const MathLibrary = artifacts.require('Math')

contract("EtheemBase", async ([owner, ...accounts]) => {
  // contract instance
  let etheem, token
  let eventFactory, marketFactory, marketMaker, oracleFactory;

  // parameters
  const numAuthors = 2
  const numUsers = 3

  const ipfsHash1 = 'QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG'
  const ipfsHash2 = 'QmQzCQn4puG4qu8PVysxZmscmQ5vT1ZXpqo7f58Uh9QfyY'
  const ipfsHash3 = 'Qma2uQEvt39zhpdT1fRC3UzS48RXPRPKaPyVoyEqwZADck'

  const ipfsHash1Bytes32 = bs58.decode(ipfsHash1).toString('hex');
  const ipfsHash2Bytes32 = bs58.decode(ipfsHash2).toString('hex');
  const ipfsHash3Bytes32 = bs58.decode(ipfsHash3).toString('hex');

  const authors = accounts.slice(1, 1 + numAuthors);
  const users = accounts.slice(1 + numAuthors, 1 + numAuthors + numUsers)


  before(async () => {
    oracleFactory = await CentralizedOracleFactory.deployed();
    eventFactory = await EventFactory.deployed();
    marketFactory = await StandardMarketFactory.deployed();
    marketMaker = await LMSRMarketMaker.deployed();

    etheem = await EtheemBase.new();
    token = await MiniMeToken.new(
      0,
      0,
      0,
      "Etheem Base Token",
      18,
      "EBT",
      true);

    await etheem.setContracts(
      token.address,
      eventFactory.address,
      marketFactory.address,
      marketMaker.address,
      oracleFactory.address,
    );

    await token.generateTokens(owner, 1000e18);
  })

  it("setup ", async () => {
    await oracleFactory.createCentralizedOracle(ipfsHash1Bytes32)
      .should.be.fulfilled;
  })

  it("register authors", async () => {
    await Promise.all(authors.map(author =>
      etheem.setAuthor(author, true)
        .should.be.fulfilled
    ));
  })

  it("author post new article", async () => {
    const author = authors[0];
    console.log("author", author)

    await etheem.addArticle(ipfsHash2Bytes32, ipfsHash3Bytes32, {
      from: author
    }).should.be.fulfilled;

  })
});
