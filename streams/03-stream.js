const Stream = require('stream');

const rs = new Stream.Readable();

// rs.push('Hello ');
// rs.push('Readable Stream');
// rs.push('\n');
// rs.push(null);

rs._read = function () {
  const value = parseInt(Math.random() * 1000);
  if (value > 990) {
    console.warn('Oops! failed', value);
  }
  if (value < 990) {
    rs.push(value.toString());
    rs.push('\n');
  } else {
    rs.push(null);
  }
};

rs.pipe(process.stdout);
