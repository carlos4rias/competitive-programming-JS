/*
  Sending to Codeforces require delete the main's function declaration
  preserving its content, also the io module must be deleted.
  This is an solution example for problem:
    https://codeforces.com/contest/1311/problem/C
*/

'use strict';

const io = require('./lib/io')(main);

function main() {
  let n = parseInt(io.readline());
  
  while ( n-- > 0 ) {
    let line = io.readline().split(' ').map(data => parseInt(data));
    solve(...line);
  }
}

function solve(n, m) {
  const str = io.readline();
  let freq = Array(n + 1).fill(0);

  const mistakes = io.readline().split(' ').map(data => parseInt(data));
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
  io.print(answer.join(' '));
}
