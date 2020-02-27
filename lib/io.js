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

  function print(...args) {
    args.forEach(a => String(a))
    const out = args.join(' ') + '\n'
    process.stdout.write(out);
  }

  return {
    'readline': readline,
    'print': print
  }
}

module.exports = worker;




