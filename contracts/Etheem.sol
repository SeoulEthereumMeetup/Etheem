pragma solidity ^0.4.18;

import "@aragon/os/contracts/apps/AragonApp.sol";
import "@aragon/os/contracts/lib/minime/MiniMeToken.sol";
import "@aragon/os/contracts/lib/zeppelin/math/SafeMath.sol";
import "@aragon/os/contracts/lib/zeppelin/math/SafeMath64.sol";


contract Etheem is AragonApp {
  using SafeMath for uint256;
  using SafeMath64 for uint64;

  MiniMeToken public token;

  bytes32 constant public CREATE_AUTHOR_ROLE = keccak256("CREATE_AUTHOR_ROLE");
  bytes32 constant public MODIFY_QUORUM_ROLE = keccak256("MODIFY_QUORUM_ROLE");


  function initialize(string _name) onlyInit  public {
    initialized();
  }
}
