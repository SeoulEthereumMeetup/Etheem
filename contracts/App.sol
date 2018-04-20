pragma solidity ^0.4.4;

import "@aragon/os/contracts/apps/AragonApp.sol";
import "@aragon/os/contracts/lib/ens/ENS.sol";


contract App is AragonApp {
	////
	////	           ....
	////	       .,,,,..,,,,.
	////	   ..,,.. ..     .,,,..
	////	 .,,.  ..,:....,,..  .,,.
	////	,:   ...,.    .,,..,.   :,
	////	.:. ,. ,           ,.. .:.
	////	 ,:,.  ..        .,,., :,
	////	  ,;.   ........,..,..:,
	////	   ,:.       .. .....:,
	////	    .:,           .::.
	////	      .,,.      .,,.
	////	        .,,,..,,,.
	////	           ....
	////
	////  Build something beautiful.
  function initialize(string _name) onlyInit public {
    initialized();
  }
}
