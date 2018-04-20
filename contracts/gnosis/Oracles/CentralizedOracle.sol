pragma solidity ^0.4.15;
import "../Oracles/Oracle.sol";


/// @title Centralized oracle contract - Allows the contract owner to set an outcome
/// @author Stefan George - <stefan@gnosis.pm>
contract CentralizedOracle is Oracle {

    /*
     *  Events
     */
    event OwnerReplacement(address indexed newOwner);
    event OutcomeAssignment(int outcome);

    /*
     *  Storage
     */
    address public owner;
    bytes32 public ipfsHash;
    bool public isSet;
    int public outcome;

    /*
     *  Modifiers
     */
    modifier isOwner () {
        // Only owner is allowed to proceed
        require(msg.sender == owner);
        _;
    }

    /*
     *  Public functions
     */
    /// @dev Constructor sets owner address and IPFS hash
    /// @param _ipfsHash bytes32 identifying off chain event description, not base58 encoded
    function CentralizedOracle(address _owner, bytes32 _ipfsHash)
        public
    {
        // Description hash cannot be null
        require(_ipfsHash != 0x00);

        owner = _owner;
        ipfsHash = _ipfsHash;
    }

    /// @dev Replaces owner
    /// @param newOwner New owner
    function replaceOwner(address newOwner)
        public
        isOwner
    {
        // Result is not set yet
        require(!isSet);
        owner = newOwner;
        OwnerReplacement(newOwner);
    }

    /// @dev Sets event outcome
    /// @param _outcome Event outcome
    function setOutcome(int _outcome)
        public
        isOwner
    {
        // Result is not set yet
        require(!isSet);
        isSet = true;
        outcome = _outcome;
        OutcomeAssignment(_outcome);
    }

    /// @dev Returns if winning outcome is set
    /// @return Is outcome set?
    function isOutcomeSet()
        public
        constant
        returns (bool)
    {
        return isSet;
    }

    /// @dev Returns outcome
    /// @return Outcome
    function getOutcome()
        public
        constant
        returns (int)
    {
        return outcome;
    }
}
