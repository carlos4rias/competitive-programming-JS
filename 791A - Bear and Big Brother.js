'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;

function main() {
  let line = readline().split(' ').map(data => parseInt(data));
  print(solve(...line));
}

function solve(a, b) {
  let answer = 0;

  while ( a <= b ) {
    a *= 3;
    b *= 2;
    answer++;
  }

  return answer;
}