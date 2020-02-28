'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;

function main() {
  const n = parseInt(readline());
  print(n % 2 == 0 ? 'Mahmoud' : 'Ehab');
}