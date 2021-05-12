const fs = require('fs')
const path = require('path')

console.log('Usage: 04-stream.js')

// Download bigger file and try this same code with it
const sourceFilePath = path.resolve('data/big-file.txt')
const destinationFilePath = path.resolve('data/big-file-copy.txt')

const rs = fs.createReadStream(sourceFilePath)
rs.setEncoding('utf8')
const ws = fs.createWriteStream(destinationFilePath)

let i =0

rs.on('data', function(chunk){
  console.log("Chunk: ",i++);
  const uppercaseContent = chunk.toUpperCase()
  ws.write(uppercaseContent)
})