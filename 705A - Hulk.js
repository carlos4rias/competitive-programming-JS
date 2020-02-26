'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;

function main() {
  const layer = ['I hate', 'I love'];

  let layers = parseInt(readline());
  let counter = 0;
  let answer = [];
  
  while ( counter + 1 < layers ) {
    answer.push(layer[counter++ % 2]);
    answer.push('that');
  }

  answer.push(layer[counter % 2]);
  answer.push('it');

  print(answer.join(' '));

}