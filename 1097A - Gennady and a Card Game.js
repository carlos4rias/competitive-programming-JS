'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;

function main(){
  const played = readline();
  
  let cards = readline().split(' ').filter((card) => {
    return card[0] === played[0] || card[1] === played[1];
  });

  print(cards.length > 0 ? 'YES' : 'NO');
}