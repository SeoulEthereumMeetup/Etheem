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

x.networks.rpc.gasPrice = 25000000001
x.networks.rpc.gas = 8.5e6

module.exports = x
