const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  const filepath = path.resolve('data/cat.txt');
  // fs.readFile(filepath, function (err, data) {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     res.end(data);
  //   }
  // });

  const readableStream = fs.createReadStream(filepath);
  readableStream.pipe(res);
});

server.listen(8000, () => console.log('Server is listening st port 8000'));
