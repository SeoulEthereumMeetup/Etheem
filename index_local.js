module.exports = {
  "networks": {
    "rpc": {
      "network_id": 15,
      "host": "localhost",
      "port": 8545,
      "gas": 8500000,
      "gasPrice": 25000000001,
      "from": "0xcf7b6f1489129c94a98c79e4be659ea111c76397",
      "ens": {
        "constructor": {
          "contractName": "ENS",
          "abi": [
            {
              "constant": true,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                }
              ],
              "name": "resolver",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                }
              ],
              "name": "owner",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                },
                {
                  "name": "label",
                  "type": "bytes32"
                },
                {
                  "name": "owner",
                  "type": "address"
                }
              ],
              "name": "setSubnodeOwner",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                },
                {
                  "name": "ttl",
                  "type": "uint64"
                }
              ],
              "name": "setTTL",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                }
              ],
              "name": "ttl",
              "outputs": [
                {
                  "name": "",
                  "type": "uint64"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                },
                {
                  "name": "resolver",
                  "type": "address"
                }
              ],
              "name": "setResolver",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                },
                {
                  "name": "owner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "_node",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "name": "_label",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "_owner",
                  "type": "address"
                }
              ],
              "name": "NewOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "_node",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "_owner",
                  "type": "address"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "_node",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "_resolver",
                  "type": "address"
                }
              ],
              "name": "NewResolver",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "_node",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "_ttl",
                  "type": "uint64"
                }
              ],
              "name": "NewTTL",
              "type": "event"
            }
          ],
          "bytecode": "0x6060604052341561000f57600080fd5b336000808060010260001916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108c0806100796000396000f300606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630178b8bf1461008857806302571be3146100ef57806306ab59231461015657806314ab9038146101a957806316a25cbd146101e35780631896f70a146102325780635b0fc9c314610278575b600080fd5b341561009357600080fd5b6100ad6004808035600019169060200190919050506102be565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100fa57600080fd5b610114600480803560001916906020019091905050610305565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016157600080fd5b6101a76004808035600019169060200190919080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061034c565b005b34156101b457600080fd5b6101e160048080356000191690602001909190803567ffffffffffffffff169060200190919050506104c6565b005b34156101ee57600080fd5b6102086004808035600019169060200190919050506105d7565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b341561023d57600080fd5b61027660048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610612565b005b341561028357600080fd5b6102bc60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610753565b005b6000806000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806000836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000833373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156103c657600080fd5b848460405180836000191660001916815260200182600019166000191681526020019250505060405180910390209150836000191685600019167fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e8285604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a382600080846000191660001916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050565b813373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561053e57600080fd5b82600019167f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa6883604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390a281600080856000191660001916815260200190815260200160002060010160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550505050565b6000806000836000191660001916815260200190815260200160002060010160149054906101000a900467ffffffffffffffff169050919050565b813373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561068a57600080fd5b82600019167f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a083604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a281600080856000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b813373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156107cb57600080fd5b82600019167fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d26683604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a281600080856000191660001916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505600a165627a7a723058203bd17b1636d2d519bbc49945b15beab42d32f6ab86f197dde383bb1281b68a5c0029",
          "deployedBytecode": "0x606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630178b8bf1461008857806302571be3146100ef57806306ab59231461015657806314ab9038146101a957806316a25cbd146101e35780631896f70a146102325780635b0fc9c314610278575b600080fd5b341561009357600080fd5b6100ad6004808035600019169060200190919050506102be565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100fa57600080fd5b610114600480803560001916906020019091905050610305565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016157600080fd5b6101a76004808035600019169060200190919080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061034c565b005b34156101b457600080fd5b6101e160048080356000191690602001909190803567ffffffffffffffff169060200190919050506104c6565b005b34156101ee57600080fd5b6102086004808035600019169060200190919050506105d7565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b341561023d57600080fd5b61027660048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610612565b005b341561028357600080fd5b6102bc60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610753565b005b6000806000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806000836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000833373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156103c657600080fd5b848460405180836000191660001916815260200182600019166000191681526020019250505060405180910390209150836000191685600019167fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e8285604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a382600080846000191660001916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050565b813373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561053e57600080fd5b82600019167f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa6883604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390a281600080856000191660001916815260200190815260200160002060010160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550505050565b6000806000836000191660001916815260200190815260200160002060010160149054906101000a900467ffffffffffffffff169050919050565b813373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561068a57600080fd5b82600019167f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a083604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a281600080856000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b813373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156107cb57600080fd5b82600019167fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d26683604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a281600080856000191660001916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505600a165627a7a723058203bd17b1636d2d519bbc49945b15beab42d32f6ab86f197dde383bb1281b68a5c0029",
          "sourceMap": "93:2534:45:-;;;499:61;;;;;;;;543:10;524:7;:10;532:1;524:10;;;;;;;;;;;;;;;;:16;;;:29;;;;;;;;;;;;;;;;;;93:2534;;;;;;",
          "deployedSourceMap": "93:2534:45:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;639:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1812:217;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2499:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1024:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2199:157;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1359:139;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:105;877:7;903;:13;911:4;903:13;;;;;;;;;;;;;;;;;:22;;;;;;;;;;;;896:29;;827:105;;;:::o;639:99::-;686:7;712;:13;720:4;712:13;;;;;;;;;;;;;;;;;:19;;;;;;;;;;;;705:26;;639:99;;;:::o;1812:217::-;1908:11;1892:4;403:10;380:33;;:7;:13;388:4;380:13;;;;;;;;;;;;;;;;;:19;;;;;;;;;;;;:33;;;;376:44;;;415:5;;;376:44;1932:4;1938:5;1922:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1908:36;;1969:5;1954:28;;;1963:4;1954:28;;;;1976:5;1954:28;;;;;;;;;;;;;;;;;;;;;;2017:5;1992:7;:16;2000:7;1992:16;;;;;;;;;;;;;;;;;:22;;;:30;;;;;;;;;;;;;;;;;;1812:217;;;;;:::o;2499:126::-;2552:4;403:10;380:33;;:7;:13;388:4;380:13;;;;;;;;;;;;;;;;;:19;;;;;;;;;;;;:33;;;;376:44;;;415:5;;;376:44;2575:4;2568:17;;;;2581:3;2568:17;;;;;;;;;;;;;;;;;;;;;;2615:3;2595:7;:13;2603:4;2595:13;;;;;;;;;;;;;;;;;:17;;;:23;;;;;;;;;;;;;;;;;;2499:126;;;:::o;1024:94::-;1069:6;1094:7;:13;1102:4;1094:13;;;;;;;;;;;;;;;;;:17;;;;;;;;;;;;1087:24;;1024:94;;;:::o;2199:157::-;2263:4;403:10;380:33;;:7;:13;388:4;380:13;;;;;;;;;;;;;;;;;:19;;;;;;;;;;;;:33;;;;376:44;;;415:5;;;376:44;2291:4;2279:27;;;;2297:8;2279:27;;;;;;;;;;;;;;;;;;;;;;2341:8;2316:7;:13;2324:4;2316:13;;;;;;;;;;;;;;;;;:22;;;:33;;;;;;;;;;;;;;;;;;2199:157;;;:::o;1359:139::-;1417:4;403:10;380:33;;:7;:13;388:4;380:13;;;;;;;;;;;;;;;;;:19;;;;;;;;;;;;:33;;;;376:44;;;415:5;;;376:44;1442:4;1433:21;;;;1448:5;1433:21;;;;;;;;;;;;;;;;;;;;;;1486:5;1464:7;:13;1472:4;1464:13;;;;;;;;;;;;;;;;;:19;;;:27;;;;;;;;;;;;;;;;;;1359:139;;;:::o",
          "source": "pragma solidity ^0.4.0;\n\n\nimport './AbstractENS.sol';\n\n/**\n * The ENS registry contract.\n */\ncontract ENS is AbstractENS {\n    struct Record {\n        address owner;\n        address resolver;\n        uint64 ttl;\n    }\n\n    mapping(bytes32=>Record) records;\n\n    // Permits modifications only by the owner of the specified node.\n    modifier only_owner(bytes32 node) {\n        if (records[node].owner != msg.sender) throw;\n        _;\n    }\n\n    /**\n     * Constructs a new ENS registrar.\n     */\n    function ENS() {\n        records[0].owner = msg.sender;\n    }\n\n    /**\n     * Returns the address that owns the specified node.\n     */\n    function owner(bytes32 node) constant returns (address) {\n        return records[node].owner;\n    }\n\n    /**\n     * Returns the address of the resolver for the specified node.\n     */\n    function resolver(bytes32 node) constant returns (address) {\n        return records[node].resolver;\n    }\n\n    /**\n     * Returns the TTL of a node, and any records associated with it.\n     */\n    function ttl(bytes32 node) constant returns (uint64) {\n        return records[node].ttl;\n    }\n\n    /**\n     * Transfers ownership of a node to a new address. May only be called by the current\n     * owner of the node.\n     * @param node The node to transfer ownership of.\n     * @param owner The address of the new owner.\n     */\n    function setOwner(bytes32 node, address owner) only_owner(node) {\n        Transfer(node, owner);\n        records[node].owner = owner;\n    }\n\n    /**\n     * Transfers ownership of a subnode keccak256(node, label) to a new address. May only be\n     * called by the owner of the parent node.\n     * @param node The parent node.\n     * @param label The hash of the label specifying the subnode.\n     * @param owner The address of the new owner.\n     */\n    function setSubnodeOwner(bytes32 node, bytes32 label, address owner) only_owner(node) {\n        var subnode = keccak256(node, label);\n        NewOwner(node, label, owner);\n        records[subnode].owner = owner;\n    }\n\n    /**\n     * Sets the resolver address for the specified node.\n     * @param node The node to update.\n     * @param resolver The address of the resolver.\n     */\n    function setResolver(bytes32 node, address resolver) only_owner(node) {\n        NewResolver(node, resolver);\n        records[node].resolver = resolver;\n    }\n\n    /**\n     * Sets the TTL for the specified node.\n     * @param node The node to update.\n     * @param ttl The TTL in seconds.\n     */\n    function setTTL(bytes32 node, uint64 ttl) only_owner(node) {\n        NewTTL(node, ttl);\n        records[node].ttl = ttl;\n    }\n}\n",
          "sourcePath": "@aragon/os/contracts/lib/ens/ENS.sol",
          "ast": {
            "attributes": {
              "absolutePath": "@aragon/os/contracts/lib/ens/ENS.sol",
              "exportedSymbols": {
                "ENS": [
                  9862
                ]
              }
            },
            "children": [
              {
                "attributes": {
                  "literals": [
                    "solidity",
                    "^",
                    "0.4",
                    ".0"
                  ]
                },
                "id": 9680,
                "name": "PragmaDirective",
                "src": "0:23:45"
              },
              {
                "attributes": {
                  "SourceUnit": 9679,
                  "absolutePath": "@aragon/os/contracts/lib/ens/AbstractENS.sol",
                  "file": "./AbstractENS.sol",
                  "scope": 9863,
                  "symbolAliases": [
                    null
                  ],
                  "unitAlias": ""
                },
                "id": 9681,
                "name": "ImportDirective",
                "src": "26:27:45"
              },
              {
                "attributes": {
                  "contractDependencies": [
                    9678
                  ],
                  "contractKind": "contract",
                  "documentation": "The ENS registry contract.",
                  "fullyImplemented": true,
                  "linearizedBaseContracts": [
                    9862,
                    9678
                  ],
                  "name": "ENS",
                  "scope": 9863
                },
                "children": [
                  {
                    "attributes": {
                      "arguments": [
                        null
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "AbstractENS",
                          "referencedDeclaration": 9678,
                          "type": "contract AbstractENS"
                        },
                        "id": 9682,
                        "name": "UserDefinedTypeName",
                        "src": "109:11:45"
                      }
                    ],
                    "id": 9683,
                    "name": "InheritanceSpecifier",
                    "src": "109:11:45"
                  },
                  {
                    "attributes": {
                      "canonicalName": "ENS.Record",
                      "name": "Record",
                      "scope": 9862,
                      "visibility": "public"
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 9690,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 9684,
                            "name": "ElementaryTypeName",
                            "src": "151:7:45"
                          }
                        ],
                        "id": 9685,
                        "name": "VariableDeclaration",
                        "src": "151:13:45"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "resolver",
                          "scope": 9690,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 9686,
                            "name": "ElementaryTypeName",
                            "src": "174:7:45"
                          }
                        ],
                        "id": 9687,
                        "name": "VariableDeclaration",
                        "src": "174:16:45"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "ttl",
                          "scope": 9690,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint64",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint64",
                              "type": "uint64"
                            },
                            "id": 9688,
                            "name": "ElementaryTypeName",
                            "src": "200:6:45"
                          }
                        ],
                        "id": 9689,
                        "name": "VariableDeclaration",
                        "src": "200:10:45"
                      }
                    ],
                    "id": 9690,
                    "name": "StructDefinition",
                    "src": "127:90:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "records",
                      "scope": 9862,
                      "stateVariable": true,
                      "storageLocation": "default",
                      "type": "mapping(bytes32 => struct ENS.Record storage ref)",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "mapping(bytes32 => struct ENS.Record storage ref)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 9691,
                            "name": "ElementaryTypeName",
                            "src": "231:7:45"
                          },
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Record",
                              "referencedDeclaration": 9690,
                              "type": "struct ENS.Record storage pointer"
                            },
                            "id": 9692,
                            "name": "UserDefinedTypeName",
                            "src": "240:6:45"
                          }
                        ],
                        "id": 9693,
                        "name": "Mapping",
                        "src": "223:24:45"
                      }
                    ],
                    "id": 9694,
                    "name": "VariableDeclaration",
                    "src": "223:32:45"
                  },
                  {
                    "attributes": {
                      "name": "only_owner",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "node",
                              "scope": 9709,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "bytes32",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 9695,
                                "name": "ElementaryTypeName",
                                "src": "352:7:45"
                              }
                            ],
                            "id": 9696,
                            "name": "VariableDeclaration",
                            "src": "352:12:45"
                          }
                        ],
                        "id": 9697,
                        "name": "ParameterList",
                        "src": "351:14:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "owner",
                                      "referencedDeclaration": 9685,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ENS.Record storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9694,
                                              "type": "mapping(bytes32 => struct ENS.Record storage ref)",
                                              "value": "records"
                                            },
                                            "id": 9698,
                                            "name": "Identifier",
                                            "src": "380:7:45"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9696,
                                              "type": "bytes32",
                                              "value": "node"
                                            },
                                            "id": 9699,
                                            "name": "Identifier",
                                            "src": "388:4:45"
                                          }
                                        ],
                                        "id": 9700,
                                        "name": "IndexAccess",
                                        "src": "380:13:45"
                                      }
                                    ],
                                    "id": 9701,
                                    "name": "MemberAccess",
                                    "src": "380:19:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 11823,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9702,
                                        "name": "Identifier",
                                        "src": "403:3:45"
                                      }
                                    ],
                                    "id": 9703,
                                    "name": "MemberAccess",
                                    "src": "403:10:45"
                                  }
                                ],
                                "id": 9704,
                                "name": "BinaryOperation",
                                "src": "380:33:45"
                              },
                              {
                                "children": [],
                                "id": 9705,
                                "name": "Throw",
                                "src": "415:5:45"
                              }
                            ],
                            "id": 9706,
                            "name": "IfStatement",
                            "src": "376:44:45"
                          },
                          {
                            "id": 9707,
                            "name": "PlaceholderStatement",
                            "src": "430:1:45"
                          }
                        ],
                        "id": 9708,
                        "name": "Block",
                        "src": "366:72:45"
                      }
                    ],
                    "id": 9709,
                    "name": "ModifierDefinition",
                    "src": "332:106:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "implemented": true,
                      "isConstructor": true,
                      "modifiers": [
                        null
                      ],
                      "name": "ENS",
                      "payable": false,
                      "scope": 9862,
                      "stateMutability": "nonpayable",
                      "superFunction": null,
                      "visibility": "public"
                    },
                    "children": [
                      {
                        "attributes": {
                          "parameters": [
                            null
                          ]
                        },
                        "children": [],
                        "id": 9710,
                        "name": "ParameterList",
                        "src": "511:2:45"
                      },
                      {
                        "attributes": {
                          "parameters": [
                            null
                          ]
                        },
                        "children": [],
                        "id": 9711,
                        "name": "ParameterList",
                        "src": "514:0:45"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "owner",
                                      "referencedDeclaration": 9685,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ENS.Record storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9694,
                                              "type": "mapping(bytes32 => struct ENS.Record storage ref)",
                                              "value": "records"
                                            },
                                            "id": 9712,
                                            "name": "Identifier",
                                            "src": "524:7:45"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "30",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 0",
                                              "value": "0"
                                            },
                                            "id": 9713,
                                            "name": "Literal",
                                            "src": "532:1:45"
                                          }
                                        ],
                                        "id": 9714,
                                        "name": "IndexAccess",
                                        "src": "524:10:45"
                                      }
                                    ],
                                    "id": 9715,
                                    "name": "MemberAccess",
                                    "src": "524:16:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 11823,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9716,
                                        "name": "Identifier",
                                        "src": "543:3:45"
                                      }
                                    ],
                                    "id": 9717,
                                    "name": "MemberAccess",
                                    "src": "543:10:45"
                                  }
                                ],
                                "id": 9718,
                                "name": "Assignment",
                                "src": "524:29:45"
                              }
                            ],
                            "id": 9719,
                            "name": "ExpressionStatement",
                            "src": "524:29:45"
                          }
                        ],
                        "id": 9720,
                        "name": "Block",
                        "src": "514:46:45"
                      }
                    ],
                    "id": 9721,
                    "name": "FunctionDefinition",
                    "src": "499:61:45"
                  },
                  {
                    "attributes": {
                      "constant": true,
                      "implemented": true,
                      "isConstructor": false,
                      "modifiers": [
                        null
                      ],
                      "name": "owner",
                      "payable": false,
                      "scope": 9862,
                      "stateMutability": "view",
                      "superFunction": 9607,
                      "visibility": "public"
                    },
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "node",
                              "scope": 9734,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "bytes32",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 9722,
                                "name": "ElementaryTypeName",
                                "src": "654:7:45"
                              }
                            ],
                            "id": 9723,
                            "name": "VariableDeclaration",
                            "src": "654:12:45"
                          }
                        ],
                        "id": 9724,
                        "name": "ParameterList",
                        "src": "653:14:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "",
                              "scope": 9734,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "address",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "address",
                                  "type": "address"
                                },
                                "id": 9725,
                                "name": "ElementaryTypeName",
                                "src": "686:7:45"
                              }
                            ],
                            "id": 9726,
                            "name": "VariableDeclaration",
                            "src": "686:7:45"
                          }
                        ],
                        "id": 9727,
                        "name": "ParameterList",
                        "src": "685:9:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 9727
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "owner",
                                  "referencedDeclaration": 9685,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct ENS.Record storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9694,
                                          "type": "mapping(bytes32 => struct ENS.Record storage ref)",
                                          "value": "records"
                                        },
                                        "id": 9728,
                                        "name": "Identifier",
                                        "src": "712:7:45"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9723,
                                          "type": "bytes32",
                                          "value": "node"
                                        },
                                        "id": 9729,
                                        "name": "Identifier",
                                        "src": "720:4:45"
                                      }
                                    ],
                                    "id": 9730,
                                    "name": "IndexAccess",
                                    "src": "712:13:45"
                                  }
                                ],
                                "id": 9731,
                                "name": "MemberAccess",
                                "src": "712:19:45"
                              }
                            ],
                            "id": 9732,
                            "name": "Return",
                            "src": "705:26:45"
                          }
                        ],
                        "id": 9733,
                        "name": "Block",
                        "src": "695:43:45"
                      }
                    ],
                    "id": 9734,
                    "name": "FunctionDefinition",
                    "src": "639:99:45"
                  },
                  {
                    "attributes": {
                      "constant": true,
                      "implemented": true,
                      "isConstructor": false,
                      "modifiers": [
                        null
                      ],
                      "name": "resolver",
                      "payable": false,
                      "scope": 9862,
                      "stateMutability": "view",
                      "superFunction": 9614,
                      "visibility": "public"
                    },
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "node",
                              "scope": 9747,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "bytes32",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 9735,
                                "name": "ElementaryTypeName",
                                "src": "845:7:45"
                              }
                            ],
                            "id": 9736,
                            "name": "VariableDeclaration",
                            "src": "845:12:45"
                          }
                        ],
                        "id": 9737,
                        "name": "ParameterList",
                        "src": "844:14:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "",
                              "scope": 9747,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "address",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "address",
                                  "type": "address"
                                },
                                "id": 9738,
                                "name": "ElementaryTypeName",
                                "src": "877:7:45"
                              }
                            ],
                            "id": 9739,
                            "name": "VariableDeclaration",
                            "src": "877:7:45"
                          }
                        ],
                        "id": 9740,
                        "name": "ParameterList",
                        "src": "876:9:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 9740
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "resolver",
                                  "referencedDeclaration": 9687,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct ENS.Record storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9694,
                                          "type": "mapping(bytes32 => struct ENS.Record storage ref)",
                                          "value": "records"
                                        },
                                        "id": 9741,
                                        "name": "Identifier",
                                        "src": "903:7:45"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9736,
                                          "type": "bytes32",
                                          "value": "node"
                                        },
                                        "id": 9742,
                                        "name": "Identifier",
                                        "src": "911:4:45"
                                      }
                                    ],
                                    "id": 9743,
                                    "name": "IndexAccess",
                                    "src": "903:13:45"
                                  }
                                ],
                                "id": 9744,
                                "name": "MemberAccess",
                                "src": "903:22:45"
                              }
                            ],
                            "id": 9745,
                            "name": "Return",
                            "src": "896:29:45"
                          }
                        ],
                        "id": 9746,
                        "name": "Block",
                        "src": "886:46:45"
                      }
                    ],
                    "id": 9747,
                    "name": "FunctionDefinition",
                    "src": "827:105:45"
                  },
                  {
                    "attributes": {
                      "constant": true,
                      "implemented": true,
                      "isConstructor": false,
                      "modifiers": [
                        null
                      ],
                      "name": "ttl",
                      "payable": false,
                      "scope": 9862,
                      "stateMutability": "view",
                      "superFunction": 9621,
                      "visibility": "public"
                    },
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "node",
                              "scope": 9760,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "bytes32",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 9748,
                                "name": "ElementaryTypeName",
                                "src": "1037:7:45"
                              }
                            ],
                            "id": 9749,
                            "name": "VariableDeclaration",
                            "src": "1037:12:45"
                          }
                        ],
                        "id": 9750,
                        "name": "ParameterList",
                        "src": "1036:14:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "",
                              "scope": 9760,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint64",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint64",
                                  "type": "uint64"
                                },
                                "id": 9751,
                                "name": "ElementaryTypeName",
                                "src": "1069:6:45"
                              }
                            ],
                            "id": 9752,
                            "name": "VariableDeclaration",
                            "src": "1069:6:45"
                          }
                        ],
                        "id": 9753,
                        "name": "ParameterList",
                        "src": "1068:8:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 9753
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "ttl",
                                  "referencedDeclaration": 9689,
                                  "type": "uint64"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct ENS.Record storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9694,
                                          "type": "mapping(bytes32 => struct ENS.Record storage ref)",
                                          "value": "records"
                                        },
                                        "id": 9754,
                                        "name": "Identifier",
                                        "src": "1094:7:45"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9749,
                                          "type": "bytes32",
                                          "value": "node"
                                        },
                                        "id": 9755,
                                        "name": "Identifier",
                                        "src": "1102:4:45"
                                      }
                                    ],
                                    "id": 9756,
                                    "name": "IndexAccess",
                                    "src": "1094:13:45"
                                  }
                                ],
                                "id": 9757,
                                "name": "MemberAccess",
                                "src": "1094:17:45"
                              }
                            ],
                            "id": 9758,
                            "name": "Return",
                            "src": "1087:24:45"
                          }
                        ],
                        "id": 9759,
                        "name": "Block",
                        "src": "1077:41:45"
                      }
                    ],
                    "id": 9760,
                    "name": "FunctionDefinition",
                    "src": "1024:94:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "implemented": true,
                      "isConstructor": false,
                      "name": "setOwner",
                      "payable": false,
                      "scope": 9862,
                      "stateMutability": "nonpayable",
                      "superFunction": 9628,
                      "visibility": "public"
                    },
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "node",
                              "scope": 9783,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "bytes32",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 9761,
                                "name": "ElementaryTypeName",
                                "src": "1377:7:45"
                              }
                            ],
                            "id": 9762,
                            "name": "VariableDeclaration",
                            "src": "1377:12:45"
                          },
                          {
                            "attributes": {
                              "constant": false,
                              "name": "owner",
                              "scope": 9783,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "address",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "address",
                                  "type": "address"
                                },
                                "id": 9763,
                                "name": "ElementaryTypeName",
                                "src": "1391:7:45"
                              }
                            ],
                            "id": 9764,
                            "name": "VariableDeclaration",
                            "src": "1391:13:45"
                          }
                        ],
                        "id": 9765,
                        "name": "ParameterList",
                        "src": "1376:29:45"
                      },
                      {
                        "attributes": {
                          "parameters": [
                            null
                          ]
                        },
                        "children": [],
                        "id": 9769,
                        "name": "ParameterList",
                        "src": "1423:0:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9709,
                              "type": "modifier (bytes32)",
                              "value": "only_owner"
                            },
                            "id": 9766,
                            "name": "Identifier",
                            "src": "1406:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9762,
                              "type": "bytes32",
                              "value": "node"
                            },
                            "id": 9767,
                            "name": "Identifier",
                            "src": "1417:4:45"
                          }
                        ],
                        "id": 9768,
                        "name": "ModifierInvocation",
                        "src": "1406:16:45"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9665,
                                      "type": "function (bytes32,address)",
                                      "value": "Transfer"
                                    },
                                    "id": 9770,
                                    "name": "Identifier",
                                    "src": "1433:8:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9762,
                                      "type": "bytes32",
                                      "value": "node"
                                    },
                                    "id": 9771,
                                    "name": "Identifier",
                                    "src": "1442:4:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9764,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 9772,
                                    "name": "Identifier",
                                    "src": "1448:5:45"
                                  }
                                ],
                                "id": 9773,
                                "name": "FunctionCall",
                                "src": "1433:21:45"
                              }
                            ],
                            "id": 9774,
                            "name": "ExpressionStatement",
                            "src": "1433:21:45"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "owner",
                                      "referencedDeclaration": 9685,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ENS.Record storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9694,
                                              "type": "mapping(bytes32 => struct ENS.Record storage ref)",
                                              "value": "records"
                                            },
                                            "id": 9775,
                                            "name": "Identifier",
                                            "src": "1464:7:45"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9762,
                                              "type": "bytes32",
                                              "value": "node"
                                            },
                                            "id": 9776,
                                            "name": "Identifier",
                                            "src": "1472:4:45"
                                          }
                                        ],
                                        "id": 9777,
                                        "name": "IndexAccess",
                                        "src": "1464:13:45"
                                      }
                                    ],
                                    "id": 9778,
                                    "name": "MemberAccess",
                                    "src": "1464:19:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9764,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 9779,
                                    "name": "Identifier",
                                    "src": "1486:5:45"
                                  }
                                ],
                                "id": 9780,
                                "name": "Assignment",
                                "src": "1464:27:45"
                              }
                            ],
                            "id": 9781,
                            "name": "ExpressionStatement",
                            "src": "1464:27:45"
                          }
                        ],
                        "id": 9782,
                        "name": "Block",
                        "src": "1423:75:45"
                      }
                    ],
                    "id": 9783,
                    "name": "FunctionDefinition",
                    "src": "1359:139:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "implemented": true,
                      "isConstructor": false,
                      "name": "setSubnodeOwner",
                      "payable": false,
                      "scope": 9862,
                      "stateMutability": "nonpayable",
                      "superFunction": 9637,
                      "visibility": "public"
                    },
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "node",
                              "scope": 9815,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "bytes32",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 9784,
                                "name": "ElementaryTypeName",
                                "src": "1837:7:45"
                              }
                            ],
                            "id": 9785,
                            "name": "VariableDeclaration",
                            "src": "1837:12:45"
                          },
                          {
                            "attributes": {
                              "constant": false,
                              "name": "label",
                              "scope": 9815,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "bytes32",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 9786,
                                "name": "ElementaryTypeName",
                                "src": "1851:7:45"
                              }
                            ],
                            "id": 9787,
                            "name": "VariableDeclaration",
                            "src": "1851:13:45"
                          },
                          {
                            "attributes": {
                              "constant": false,
                              "name": "owner",
                              "scope": 9815,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "address",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "address",
                                  "type": "address"
                                },
                                "id": 9788,
                                "name": "ElementaryTypeName",
                                "src": "1866:7:45"
                              }
                            ],
                            "id": 9789,
                            "name": "VariableDeclaration",
                            "src": "1866:13:45"
                          }
                        ],
                        "id": 9790,
                        "name": "ParameterList",
                        "src": "1836:44:45"
                      },
                      {
                        "attributes": {
                          "parameters": [
                            null
                          ]
                        },
                        "children": [],
                        "id": 9794,
                        "name": "ParameterList",
                        "src": "1898:0:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9709,
                              "type": "modifier (bytes32)",
                              "value": "only_owner"
                            },
                            "id": 9791,
                            "name": "Identifier",
                            "src": "1881:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9785,
                              "type": "bytes32",
                              "value": "node"
                            },
                            "id": 9792,
                            "name": "Identifier",
                            "src": "1892:4:45"
                          }
                        ],
                        "id": 9793,
                        "name": "ModifierInvocation",
                        "src": "1881:16:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                9795
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "subnode",
                                  "scope": 9815,
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "type": "bytes32",
                                  "typeName": null,
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [],
                                "id": 9795,
                                "name": "VariableDeclaration",
                                "src": "1908:11:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "bytes32",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11817,
                                      "type": "function () pure returns (bytes32)",
                                      "value": "keccak256"
                                    },
                                    "id": 9796,
                                    "name": "Identifier",
                                    "src": "1922:9:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9785,
                                      "type": "bytes32",
                                      "value": "node"
                                    },
                                    "id": 9797,
                                    "name": "Identifier",
                                    "src": "1932:4:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9787,
                                      "type": "bytes32",
                                      "value": "label"
                                    },
                                    "id": 9798,
                                    "name": "Identifier",
                                    "src": "1938:5:45"
                                  }
                                ],
                                "id": 9799,
                                "name": "FunctionCall",
                                "src": "1922:22:45"
                              }
                            ],
                            "id": 9800,
                            "name": "VariableDeclarationStatement",
                            "src": "1908:36:45"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9659,
                                      "type": "function (bytes32,bytes32,address)",
                                      "value": "NewOwner"
                                    },
                                    "id": 9801,
                                    "name": "Identifier",
                                    "src": "1954:8:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9785,
                                      "type": "bytes32",
                                      "value": "node"
                                    },
                                    "id": 9802,
                                    "name": "Identifier",
                                    "src": "1963:4:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9787,
                                      "type": "bytes32",
                                      "value": "label"
                                    },
                                    "id": 9803,
                                    "name": "Identifier",
                                    "src": "1969:5:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9789,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 9804,
                                    "name": "Identifier",
                                    "src": "1976:5:45"
                                  }
                                ],
                                "id": 9805,
                                "name": "FunctionCall",
                                "src": "1954:28:45"
                              }
                            ],
                            "id": 9806,
                            "name": "ExpressionStatement",
                            "src": "1954:28:45"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "owner",
                                      "referencedDeclaration": 9685,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ENS.Record storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9694,
                                              "type": "mapping(bytes32 => struct ENS.Record storage ref)",
                                              "value": "records"
                                            },
                                            "id": 9807,
                                            "name": "Identifier",
                                            "src": "1992:7:45"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9795,
                                              "type": "bytes32",
                                              "value": "subnode"
                                            },
                                            "id": 9808,
                                            "name": "Identifier",
                                            "src": "2000:7:45"
                                          }
                                        ],
                                        "id": 9809,
                                        "name": "IndexAccess",
                                        "src": "1992:16:45"
                                      }
                                    ],
                                    "id": 9810,
                                    "name": "MemberAccess",
                                    "src": "1992:22:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9789,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 9811,
                                    "name": "Identifier",
                                    "src": "2017:5:45"
                                  }
                                ],
                                "id": 9812,
                                "name": "Assignment",
                                "src": "1992:30:45"
                              }
                            ],
                            "id": 9813,
                            "name": "ExpressionStatement",
                            "src": "1992:30:45"
                          }
                        ],
                        "id": 9814,
                        "name": "Block",
                        "src": "1898:131:45"
                      }
                    ],
                    "id": 9815,
                    "name": "FunctionDefinition",
                    "src": "1812:217:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "implemented": true,
                      "isConstructor": false,
                      "name": "setResolver",
                      "payable": false,
                      "scope": 9862,
                      "stateMutability": "nonpayable",
                      "superFunction": 9644,
                      "visibility": "public"
                    },
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "node",
                              "scope": 9838,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "bytes32",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 9816,
                                "name": "ElementaryTypeName",
                                "src": "2220:7:45"
                              }
                            ],
                            "id": 9817,
                            "name": "VariableDeclaration",
                            "src": "2220:12:45"
                          },
                          {
                            "attributes": {
                              "constant": false,
                              "name": "resolver",
                              "scope": 9838,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "address",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "address",
                                  "type": "address"
                                },
                                "id": 9818,
                                "name": "ElementaryTypeName",
                                "src": "2234:7:45"
                              }
                            ],
                            "id": 9819,
                            "name": "VariableDeclaration",
                            "src": "2234:16:45"
                          }
                        ],
                        "id": 9820,
                        "name": "ParameterList",
                        "src": "2219:32:45"
                      },
                      {
                        "attributes": {
                          "parameters": [
                            null
                          ]
                        },
                        "children": [],
                        "id": 9824,
                        "name": "ParameterList",
                        "src": "2269:0:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9709,
                              "type": "modifier (bytes32)",
                              "value": "only_owner"
                            },
                            "id": 9821,
                            "name": "Identifier",
                            "src": "2252:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9817,
                              "type": "bytes32",
                              "value": "node"
                            },
                            "id": 9822,
                            "name": "Identifier",
                            "src": "2263:4:45"
                          }
                        ],
                        "id": 9823,
                        "name": "ModifierInvocation",
                        "src": "2252:16:45"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9671,
                                      "type": "function (bytes32,address)",
                                      "value": "NewResolver"
                                    },
                                    "id": 9825,
                                    "name": "Identifier",
                                    "src": "2279:11:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9817,
                                      "type": "bytes32",
                                      "value": "node"
                                    },
                                    "id": 9826,
                                    "name": "Identifier",
                                    "src": "2291:4:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9819,
                                      "type": "address",
                                      "value": "resolver"
                                    },
                                    "id": 9827,
                                    "name": "Identifier",
                                    "src": "2297:8:45"
                                  }
                                ],
                                "id": 9828,
                                "name": "FunctionCall",
                                "src": "2279:27:45"
                              }
                            ],
                            "id": 9829,
                            "name": "ExpressionStatement",
                            "src": "2279:27:45"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "resolver",
                                      "referencedDeclaration": 9687,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ENS.Record storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9694,
                                              "type": "mapping(bytes32 => struct ENS.Record storage ref)",
                                              "value": "records"
                                            },
                                            "id": 9830,
                                            "name": "Identifier",
                                            "src": "2316:7:45"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9817,
                                              "type": "bytes32",
                                              "value": "node"
                                            },
                                            "id": 9831,
                                            "name": "Identifier",
                                            "src": "2324:4:45"
                                          }
                                        ],
                                        "id": 9832,
                                        "name": "IndexAccess",
                                        "src": "2316:13:45"
                                      }
                                    ],
                                    "id": 9833,
                                    "name": "MemberAccess",
                                    "src": "2316:22:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9819,
                                      "type": "address",
                                      "value": "resolver"
                                    },
                                    "id": 9834,
                                    "name": "Identifier",
                                    "src": "2341:8:45"
                                  }
                                ],
                                "id": 9835,
                                "name": "Assignment",
                                "src": "2316:33:45"
                              }
                            ],
                            "id": 9836,
                            "name": "ExpressionStatement",
                            "src": "2316:33:45"
                          }
                        ],
                        "id": 9837,
                        "name": "Block",
                        "src": "2269:87:45"
                      }
                    ],
                    "id": 9838,
                    "name": "FunctionDefinition",
                    "src": "2199:157:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "implemented": true,
                      "isConstructor": false,
                      "name": "setTTL",
                      "payable": false,
                      "scope": 9862,
                      "stateMutability": "nonpayable",
                      "superFunction": 9651,
                      "visibility": "public"
                    },
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "node",
                              "scope": 9861,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "bytes32",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 9839,
                                "name": "ElementaryTypeName",
                                "src": "2515:7:45"
                              }
                            ],
                            "id": 9840,
                            "name": "VariableDeclaration",
                            "src": "2515:12:45"
                          },
                          {
                            "attributes": {
                              "constant": false,
                              "name": "ttl",
                              "scope": 9861,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint64",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint64",
                                  "type": "uint64"
                                },
                                "id": 9841,
                                "name": "ElementaryTypeName",
                                "src": "2529:6:45"
                              }
                            ],
                            "id": 9842,
                            "name": "VariableDeclaration",
                            "src": "2529:10:45"
                          }
                        ],
                        "id": 9843,
                        "name": "ParameterList",
                        "src": "2514:26:45"
                      },
                      {
                        "attributes": {
                          "parameters": [
                            null
                          ]
                        },
                        "children": [],
                        "id": 9847,
                        "name": "ParameterList",
                        "src": "2558:0:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9709,
                              "type": "modifier (bytes32)",
                              "value": "only_owner"
                            },
                            "id": 9844,
                            "name": "Identifier",
                            "src": "2541:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9840,
                              "type": "bytes32",
                              "value": "node"
                            },
                            "id": 9845,
                            "name": "Identifier",
                            "src": "2552:4:45"
                          }
                        ],
                        "id": 9846,
                        "name": "ModifierInvocation",
                        "src": "2541:16:45"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_uint64",
                                          "typeString": "uint64"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9677,
                                      "type": "function (bytes32,uint64)",
                                      "value": "NewTTL"
                                    },
                                    "id": 9848,
                                    "name": "Identifier",
                                    "src": "2568:6:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9840,
                                      "type": "bytes32",
                                      "value": "node"
                                    },
                                    "id": 9849,
                                    "name": "Identifier",
                                    "src": "2575:4:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9842,
                                      "type": "uint64",
                                      "value": "ttl"
                                    },
                                    "id": 9850,
                                    "name": "Identifier",
                                    "src": "2581:3:45"
                                  }
                                ],
                                "id": 9851,
                                "name": "FunctionCall",
                                "src": "2568:17:45"
                              }
                            ],
                            "id": 9852,
                            "name": "ExpressionStatement",
                            "src": "2568:17:45"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint64"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "ttl",
                                      "referencedDeclaration": 9689,
                                      "type": "uint64"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct ENS.Record storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9694,
                                              "type": "mapping(bytes32 => struct ENS.Record storage ref)",
                                              "value": "records"
                                            },
                                            "id": 9853,
                                            "name": "Identifier",
                                            "src": "2595:7:45"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9840,
                                              "type": "bytes32",
                                              "value": "node"
                                            },
                                            "id": 9854,
                                            "name": "Identifier",
                                            "src": "2603:4:45"
                                          }
                                        ],
                                        "id": 9855,
                                        "name": "IndexAccess",
                                        "src": "2595:13:45"
                                      }
                                    ],
                                    "id": 9856,
                                    "name": "MemberAccess",
                                    "src": "2595:17:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9842,
                                      "type": "uint64",
                                      "value": "ttl"
                                    },
                                    "id": 9857,
                                    "name": "Identifier",
                                    "src": "2615:3:45"
                                  }
                                ],
                                "id": 9858,
                                "name": "Assignment",
                                "src": "2595:23:45"
                              }
                            ],
                            "id": 9859,
                            "name": "ExpressionStatement",
                            "src": "2595:23:45"
                          }
                        ],
                        "id": 9860,
                        "name": "Block",
                        "src": "2558:67:45"
                      }
                    ],
                    "id": 9861,
                    "name": "FunctionDefinition",
                    "src": "2499:126:45"
                  }
                ],
                "id": 9862,
                "name": "ContractDefinition",
                "src": "93:2534:45"
              }
            ],
            "id": 9863,
            "name": "SourceUnit",
            "src": "0:2628:45"
          },
          "compiler": {
            "name": "solc",
            "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
          },
          "networks": {},
          "schemaVersion": "1.0.1",
          "updatedAt": "2018-04-20T11:29:47.149Z"
        },
        "abi": [
          {
            "constant": true,
            "inputs": [
              {
                "name": "node",
                "type": "bytes32"
              }
            ],
            "name": "resolver",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "node",
                "type": "bytes32"
              }
            ],
            "name": "owner",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "node",
                "type": "bytes32"
              },
              {
                "name": "label",
                "type": "bytes32"
              },
              {
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "setSubnodeOwner",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "node",
                "type": "bytes32"
              },
              {
                "name": "ttl",
                "type": "uint64"
              }
            ],
            "name": "setTTL",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "node",
                "type": "bytes32"
              }
            ],
            "name": "ttl",
            "outputs": [
              {
                "name": "",
                "type": "uint64"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "node",
                "type": "bytes32"
              },
              {
                "name": "resolver",
                "type": "address"
              }
            ],
            "name": "setResolver",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "node",
                "type": "bytes32"
              },
              {
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "setOwner",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_node",
                "type": "bytes32"
              },
              {
                "indexed": true,
                "name": "_label",
                "type": "bytes32"
              },
              {
                "indexed": false,
                "name": "_owner",
                "type": "address"
              }
            ],
            "name": "NewOwner",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_node",
                "type": "bytes32"
              },
              {
                "indexed": false,
                "name": "_owner",
                "type": "address"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_node",
                "type": "bytes32"
              },
              {
                "indexed": false,
                "name": "_resolver",
                "type": "address"
              }
            ],
            "name": "NewResolver",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_node",
                "type": "bytes32"
              },
              {
                "indexed": false,
                "name": "_ttl",
                "type": "uint64"
              }
            ],
            "name": "NewTTL",
            "type": "event"
          }
        ],
        "contract": {
          "_eth": {
            "_requestManager": {
              "provider": {
                "provider": {}
              },
              "polls": {},
              "timeout": null
            },
            "compile": {},
            "coinbase": "0xcf7b6f1489129c94a98c79e4be659ea111c76397",
            "mining": true,
            "hashrate": 0,
            "syncing": false,
            "gasPrice": "20000000000",
            "accounts": [
              "0xcf7b6f1489129c94a98c79e4be659ea111c76397",
              "0x075451eaec6c450da3ca169e7187ad8b5b745459",
              "0xb7aa50eb5e42c74076ea1b902a6142539f654796",
              "0x922aa0d0e720caf10bcd7a02be187635a6f36ab0",
              "0x6267901dbb0055e12ea895fc768b68486d57dcf8",
              "0x236df55249ac7a6dfea613cd69ccd014c3cb8445",
              "0xceca4d86a45cfef2e6431b4a871123a23bef6d87",
              "0x8afe4672155b070e0645c0c9fc50d8eb3eab9a7e",
              "0x9a324ed04eb457e28500a536ab9201516b1c69c5",
              "0x8f69ff5faad3b8b9df879455e2464538be283ada",
              "0x3caed6dfde5517aaf243a83086500d4416bef90c",
              "0x6a082e9f8b2126d964c4c4be2fc730e6a2a2574e",
              "0xf4a88b13eadd4fd2b7636470d597e638a369dafb",
              "0xd9e1ccf606e6dae608d94535c1753fde9c822642",
              "0x501cbf0f9281f60062639daabd3dedf40c527d4f",
              "0xbfd49a39dc77db83b4694526351e877e5b87ea27",
              "0xd8b556877210aaff9d864658391a02f894a2f47f",
              "0x4406f24bddd69845abe275426330ecb02abbc7ac",
              "0x11030eb285ce72b6d4fb364fc1ad7f7d671a8eba",
              "0x7a1bd647f350c130f0d33ae3d76ee28f12070424",
              "0xa5fb5e606346d20c2a919a8270ac5934eb29857c",
              "0x4ca70ac5fc219e5ce3051a48181d8ddcb5f2e5ce",
              "0x0220fd941ccc401fae3e249b5fa2d6f32e414a2e",
              "0xa56849db6cec13174099d15bcb7496d37fb0f976",
              "0x44b1ea64debf455757075d34c2676b318680ea61",
              "0xbaf45e2298fa43430466072e3eef95651cc0d55a",
              "0xc482ef73daf203e20e8d5688f2d4a60b0bb58d5e",
              "0xda2c377a6bd6bcf4819166eeb692effdb0d52cba",
              "0x2cac9a33403645e1aadeb6de99493ad58c3955b2",
              "0xe9436c159502a6912b048d8774f6ceff74b9e1e9",
              "0x0166685dd1fa8e6c061b13fc16fff3dea94e8ba2",
              "0x20445a561341cfc303efc088cffcaf38263b9e2d",
              "0xa7d3c744a51f762cb099aa5d69db384603b2e338",
              "0xa0d9d244a6c8a6b855aee570f224caae5f8d83cd",
              "0xdaaa51c1aabc8bf2d0763a8f068fb6786e33c962",
              "0xad507f576c076afd7574e8387636614ca46aeb4f",
              "0x9cd5eb6d7706274bdb00c16bb8783c221c6c8c70",
              "0x42e8a994e26a7ca3cf1b400a5083c4eb3ba46f8c",
              "0xb2b7c059d48451a9a3d3f185b3ccafaf7d2b0d05",
              "0xb30349a4feb921f79b4179558eb3cc41d03bb78e",
              "0x57b1d1fe6723257cd5666dfe226afb7d5404ec07",
              "0x12a57b450b6d12de3888fd46487f89dae1ae5a16",
              "0xa9a1620250b6daa0f840ebf1d237431b00af44ff",
              "0xd8e06276d5097bf409412368bb4c7e40cded4e57",
              "0xdc26353119751e5aeae1efb136bdd59d0164d4d8",
              "0x94fd613561083802efff3310e118fe52d4afa175",
              "0xde370c337f95adb8523f42e34561ce9a6575a71e",
              "0x47add683a4b7ac600208373ad242f2f826be27a9",
              "0xac4e6e9b2dc2d0bbf6ed745c68509cc3a1db7d41",
              "0x46e64bdf2366076ca8f8387bb6de9a85dd4c5944",
              "0x54ba7a145e0125f307de15851d59f4ae400d4b31",
              "0x0246f237b2c3b9ed15ec47575a3157fd2f9d90b6",
              "0xd70705f93472420cc8c6199aca5308df6bd5011b",
              "0x38acfc8001967fb24c309d04a0ff38edc566ebcd",
              "0x1addb7aab33a3d508187818a666e7b9601627ade",
              "0xf04307c8793d56ea9cbddbe4e004e6a11157282b",
              "0x6fe45fe1d2436905e438bea4eb23acd9be17ff54",
              "0x239dce4e4c2bcf2e09b5f2cb758016f3d1defb6a",
              "0xde1e3e9ec2f35d9ef06542e976329c411b120e66",
              "0x3fcbaa69befff4bec8df04356d944a376b42468f",
              "0xe90824420dee2b623faa16d7c9f50c8cb690462f"
            ],
            "blockNumber": 26,
            "protocolVersion": "63"
          },
          "transactionHash": "0xbb4fabe563309ebfffda967b3dccdfe1b46ecca4786b41a038ae5a4af9388dbd",
          "address": "0x754185873c99415466d2bc67cae5b62bf34bbd12",
          "abi": [
            {
              "constant": true,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                }
              ],
              "name": "resolver",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                }
              ],
              "name": "owner",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                },
                {
                  "name": "label",
                  "type": "bytes32"
                },
                {
                  "name": "owner",
                  "type": "address"
                }
              ],
              "name": "setSubnodeOwner",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                },
                {
                  "name": "ttl",
                  "type": "uint64"
                }
              ],
              "name": "setTTL",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                }
              ],
              "name": "ttl",
              "outputs": [
                {
                  "name": "",
                  "type": "uint64"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                },
                {
                  "name": "resolver",
                  "type": "address"
                }
              ],
              "name": "setResolver",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "node",
                  "type": "bytes32"
                },
                {
                  "name": "owner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "_node",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "name": "_label",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "_owner",
                  "type": "address"
                }
              ],
              "name": "NewOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "_node",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "_owner",
                  "type": "address"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "_node",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "_resolver",
                  "type": "address"
                }
              ],
              "name": "NewResolver",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "name": "_node",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "_ttl",
                  "type": "uint64"
                }
              ],
              "name": "NewTTL",
              "type": "event"
            }
          ]
        },
        "address": "0x754185873c99415466d2bc67cae5b62bf34bbd12",
        "transactionHash": "0xbb4fabe563309ebfffda967b3dccdfe1b46ecca4786b41a038ae5a4af9388dbd"
      },
      "templates": [
        {
          "name": "Etheem",
          "address": "0x61fac2d984bac88e2e014c80c32eac05958e345f"
        }
      ]
    },
    "devnet": {
      "network_id": 15,
      "host": "devnet",
      "port": 8545,
      "gas": 6900000
    },
    "ropsten": {
      "network_id": 3,
      "gas": 4712000
    },
    "kovan": {
      "network_id": 42,
      "gas": 6900000
    },
    "rinkeby": {
      "network_id": 4,
      "provider": {},
      "gas": 6900000,
      "gasPrice": 15000000001
    },
    "coverage": {
      "host": "localhost",
      "network_id": "*",
      "port": 8555,
      "gas": 1099511627775,
      "gasPrice": 1
    }
  },
  "build": {},
  "mocha": {}
}