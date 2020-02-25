'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;

function main() {
  const opinions = parseInt(readline());
  const hardProblems = readline().split(' ').filter( opinion => {
    return opinion === '1'; 
  });
  
  print(hardProblems.length > 0 ? 'HARD' : 'EASY' );
}