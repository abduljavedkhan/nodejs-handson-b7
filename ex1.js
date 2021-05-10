#!/usr/bin/env node

'use strict';

/**
 *
 *
 *
 */

// STDIO
// STDIN = 0, STDOUT =1 , STDERR = 2

// Goal is to get access of command line parameters
const minimist = require('minimist');
const getStdin = require('get-stdin');
const fs = require('fs');
const path = require('path');

const args = minimist(process.argv.slice(2), {
  boolean: ['help', 'in'],
  string: ['file'],
});

// console.log(args);
// console.log('Hello World');
// console.error('oops! got an error');

// process.stdin.read()
// process.stderr.write('I got a new error');
// process.stdout.write('Hello World');

if (args.help) {
  showHelp();
} else if (args.in) {
  console.log('Read file from STDIN');
  getStdin()
    .then(function (content) {
      console.log(content.toUpperCase());
    })
    .catch(error);
} else if (args.file) {
  // process file
  const filePath = path.resolve(args.file);
  // console.log(__dirname);
  // console.log(filePath);
  processFile(filePath);
} else {
  error();
}

function processFile(filePath) {
  // const content = fs.readFileSync(filePath, 'utf8');
  // console.log("")
  // "<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 0a>"
  // console.log(content);
  // process.stdout.write(content);
  fs.readFile(filePath, function (err, content) {
    if (err) {
      error(err.toString());
    } else {
      const upperCaseContent = content.toString().toUpperCase();
      console.log(upperCaseContent);
    }
  });

  console.log('I will be executed before file processes');
}

function showHelp() {
  console.log('----ex1 usage-----');
  console.log('');
  console.log('./ex1.js --file=<filename>  Process file');
  console.log('./ex1.js --in               Read Input from STDIN');
  console.log('./ex1.js --help             Show help');
}

function error(message) {
  console.error(message);
}
