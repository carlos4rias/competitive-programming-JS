# competitive-programming-JS
Solving CodeForces problems using JS.

On the lib folder is a "module" that allows test the program in our own computer as the Codeforces' judge has  two functions for read (readline) and for print (print), this module just try to mimitise those functions.

*Example:*

    'use strict';

    const io = require('./lib/io')(main); // import the module
    const readline = io.readline;
    const print = io.print;

    function main() {
      const opinions = parseInt(readline());
      const hardProblems = readline().split(' ').filter( opinion => {
        return opinion === '1'; 
      });
      
      print(hardProblems.length > 0 ? 'HARD' : 'EASY' );
    }

*There are problems if you try to upload this code as it is, so in order to upload it and don't get any error you must delete the require and call the main function, e.g.*

    'use strict';

    main();

    function main() {
      const opinions = parseInt(readline());
      const hardProblems = readline().split(' ').filter( opinion => {
        return opinion === '1'; 
      });
      
      print(hardProblems.length > 0 ? 'HARD' : 'EASY' );
    }

*the previous code is the solution for this problem https://codeforces.com/problemset/problem/1030/A*