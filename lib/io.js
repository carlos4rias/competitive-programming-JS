'use strict';

const worker = function (main) {
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  let inputString = '';
  let currentLine = 0;

  process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
  });

  process.stdin.on('end', () => {
  inputString = inputString.trim().split('\n').map(
    string => string.trim()
    );
    main();
  });
    
  function readline() {
    return inputString[currentLine++];
  }

  function print(str) {
    process.stdout.write(String(str) + '\n');
  }

  return {
    'readline': readline,
    'print': print
  }
}

module.exports = worker;




