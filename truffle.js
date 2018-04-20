let x = require("@aragon/os/truffle-config")
require('babel-register')

x.networks.rpc.gasPrice = 25000000001
x.networks.rpc.gas = 8.5e6

module.exports = x
