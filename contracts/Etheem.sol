pragma solidity ^0.4.18;

import "@aragon/os/contracts/apps/AragonApp.sol";


contract Etheem is AragonApp {
  function initialize(string _name) onlyInit  public {
    initialized();
  }
}
