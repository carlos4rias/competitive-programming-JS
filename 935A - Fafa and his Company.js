'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;

function main() {
  const employees = parseInt(readline());
  let answer = 0;

  for ( let i = 1; i < employees; ++i ) {
    answer += (employees % i == 0);
  }

  print(answer);
}