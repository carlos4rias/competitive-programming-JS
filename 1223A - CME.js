'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;

function main() {
  let cases = parseInt(readline());
  while ( cases-- > 0 ) {
    print(solve());
  }
}

function solve() {
  let matches = parseInt(readline());
  matches -= 4; // 1 + 1 = 2, basic equation

  return ( ( matches < 0 ) ? -1 * matches : matches % 2 );
}