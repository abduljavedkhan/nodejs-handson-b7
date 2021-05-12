const fs = require('fs')
const path = require('path')
const {pipeline} = require('stream')
const zlib = require('zlib')

// Download bigger file and try this same code with it
const sourceFilePath = path.resolve('data/big-file.txt')
const destinationFilePath = path.resolve('data/big-file.txt.gz')

const rs = fs.createReadStream(sourceFilePath)
// rs.setEncoding('utf8')
const ws = fs.createWriteStream(destinationFilePath)

pipeline(rs, zlib.createGzip(), ws, function(err){
  if(err) {
    console.error('Pipeline failed', err)
  } else {
    console.log('Pipeline succeeded')
  }
})