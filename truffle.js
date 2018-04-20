// module.exports = {
//   networks: {
//     development: {
//       host: 'localhost',
//       port: 8545,
//       network_id: '*'
//     }
//   }
// }

let x = require("@aragon/os/truffle-config")

x.networks.rinkeby.gasPrice = 25000000001
x.networks.rinkeby.gasLimit = 7e6

module.exports = x
