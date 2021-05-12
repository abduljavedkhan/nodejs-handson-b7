const path = require('path');
const fs = require('fs');

// const readableStream = process.stdin;

// const writableStream = process.stdout;

// readableStream.pipe(writableStream);

const filepath = path.resolve('temp.txt');

const writableStream = fs.createWriteStream(filepath);

process.stdin.pipe(writableStream);

// writableStream.pipe(process.stdin);
