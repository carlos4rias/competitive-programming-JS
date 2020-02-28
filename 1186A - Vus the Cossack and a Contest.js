'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;

function main() {
  const line = readline().split(' ').map(item => parseInt(item));
  print(solve(...line) ? 'Yes' : 'No');
}

function solve(n, m, k) {
  return ( m >= n && k >= n );
}