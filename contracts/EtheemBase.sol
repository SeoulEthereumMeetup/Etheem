pragma solidity ^0.4.18;

import "@aragon/os/contracts/lib/zeppelin/math/SafeMath.sol";
import "@aragon/os/contracts/lib/zeppelin/math/SafeMath64.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

import "./gnosis/Events/EventFactory.sol";
import "./gnosis/Events/CategoricalEvent.sol";
import "./gnosis/Markets/StandardMarketFactory.sol";
import "./gnosis/Markets/StandardMarket.sol";
import "./gnosis/MarketMakers/MarketMaker.sol";
import "./gnosis/Oracles/CentralizedOracle.sol";
import "./gnosis/Oracles/CentralizedOracleFactory.sol";



contract EtheemBase is Ownable {
  using SafeMath for uint256;
  using SafeMath64 for uint64;

  event NewArticle(bytes32 root, bytes32 article, address author);

  struct Author {
    bool isValid;
    uint32 reputation;
    uint32 numPosts;
  }

  struct Root {
    bytes32 previousRoot;
    bytes32 articleHash;
    address author;
  }

  Token public token;
  EventFactory public eventFactory;
  StandardMarketFactory public marketFactory;
  CentralizedOracleFactory public oracleFactory;
  MarketMaker public marketMaker;

  mapping (address => Author) public authors;
  mapping (bytes32 => Root) public root;
  mapping (bytes32 => StandardMarket) public markets;
  mapping (bytes32 => bytes32) public nextRoot;
  bytes32 public currentRoot;

  modifier onlyAuthor(address _addr) {
    require(authors[_addr].isValid);
    _;
  }

  function setContracts(
    Token _token,
    EventFactory _eventFactory,
    StandardMarketFactory _marketFactory,
    MarketMaker _marketMaker,
    CentralizedOracleFactory _oracleFactory
  )
    external onlyOwner
  {
    require(address(token) == address(0));
    require(address(eventFactory) == address(0));
    require(address(marketFactory) == address(0));
    require(address(marketMaker) == address(0));
    require(address(oracleFactory) == address(0));

    token = _token;
    eventFactory = _eventFactory;
    marketFactory = _marketFactory;
    marketMaker = _marketMaker;
    oracleFactory = _oracleFactory;
  }

  function setAuthor(address _addr, bool _value) external onlyOwner {
    if (!_value) {
      delete authors[_addr];
    }

    authors[_addr].isValid = true;
  }

  function addArticle(bytes32 _nextRoot, bytes32 _articleHash) external onlyAuthor(msg.sender) {
    nextRoot[currentRoot] = _nextRoot;

    root[_nextRoot].previousRoot = currentRoot;
    root[_nextRoot].articleHash = _articleHash;
    root[_nextRoot].author = msg.sender;

    currentRoot = _nextRoot;

    NewArticle(currentRoot, _articleHash, msg.sender);

    initVoting(_articleHash);
  }

  /* TODO: design challange */
  function challangeRoot(bytes32 _targetRoot) external {

  }

  function initVoting(bytes32 _articleHash) internal {
    CentralizedOracle oracle = oracleFactory.createCentralizedOracle(_articleHash);
    CategoricalEvent eventContract = eventFactory.createCategoricalEvent(token, oracle, 2); // good or bad
    StandardMarket market = marketFactory.createMarket(eventContract, marketMaker, 0);

    markets[_articleHash] = market;
  }
}
