const series = require('async/series')
const IPFS = require('ipfs')
const node = new IPFS();

series([
  (cb) => node.on('ready', cb),
  (cb) => node.version((err, version) => {
    if (err) { return cb(err) }
    console.log('Version:', version.version)
    cb()
  }),
  (cb) => node.files.add(new node.types.Buffer('Hello world!!'), (err, filesAdded) => {
    if (err) {
      return console.error('Error - ipfs files add', err, filesAdded)
    }

    filesAdded.forEach((file) => console.log('successfully stored', file.hash))
    cb()
  }),

  (cb) => node.files.get("QmQzCQn4puG4qu8PVysxZmscmQ5vT1ZXpqo7f58Uh9QfyY", (err, files) => {
    if (err) {
      return console.error('Error - ipfs files add', err, files)
    }

    files.forEach((buf) => {
      const data = buf.content.toString('utf-8')
      console.log('successfully fetched', JSON.stringify(data))
    })
    cb()
  })
])
