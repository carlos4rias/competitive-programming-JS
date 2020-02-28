'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;

function main() {
  const strLen = parseInt(readline());
  const str = readline();
  const numberOfN = (str.match(new RegExp('n', 'g')) || []).length;
  const numberOfZ = (str.match(new RegExp('z', 'g')) || []).length;

  print('1 '.repeat(numberOfN) + '0 '.repeat(numberOfZ));
}