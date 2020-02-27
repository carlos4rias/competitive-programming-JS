'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;


function main() {
  const bills = [100, 20, 10, 5, 1];
  let dollars = parseInt(readline());
  let answer = 0;
  
  bills.forEach((bill) => {
    const decrease = Math.floor(dollars / bill);
    if ( decrease > 0 ) {
      answer += decrease;
      dollars -= decrease * bill;
    } 
  });

  print(answer);
}
