const fs = require('fs')
const path = require('path')

const contracts = fs.readdirSync(path.resolve(__dirname, '../contracts'))
  .filter(f => f.search(/\.sol$/) > 0)
  .map(f => f.substr(0, f.length - 4))

let abis = {}

contracts.forEach(contract => {
  abis[contract] = require('../build/contracts/' + contract).abi
})


require('fs').writeFileSync('abis.json', JSON.stringify(abis, null, 2))
console.log('generated and saved abis.json')
