'use strict';

const io = require('./lib/io')(main);
const readline = io.readline;
const print = io.print;

function main() {
  let n = parseInt(io.readline());
  
  while ( n-- > 0 ) {
    let line = readline().split(' ').map(data => parseInt(data));
    solve(...line);
  }
}

function solve(n, m) {
  const str = readline();
  let freq = Array(n + 1).fill(0);

  const mistakes = readline().split(' ').map(data => parseInt(data));
  mistakes.push(n);

  mistakes.forEach(x => {
    freq[0]++; freq[x]--;
  });

  let answer = Array(26).fill(0);
  let accumulated = 0;

  for ( let i = 0; i < str.length; ++i ) {
    accumulated += freq[i];
    answer[str.charCodeAt(i) - 97] += accumulated;
  }
  print(answer.join(' '));
}
