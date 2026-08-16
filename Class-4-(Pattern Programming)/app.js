//* Pattern Programming

//? Q-1   Make a right angle triangle [*]-

// let prompt = require('prompt-sync')()
// let a = prompt('Enter a number : ')

// for(let i=1; i<=a ; i++){
//     for(let j=1; j<=i ; j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }

//? Q-2   Make a right angle triangle [numbers]-

// let prompt = require('prompt-sync')()
// let a = prompt('Enter a number : ')

// for(let i=1; i<=a ; i++){
//     for(let j=1; j<=i ; j++){
//         process.stdout.write(j + " ")
//     }
//     console.log()
// }

//? Q-3   Make a right angle triangle [alphabet]-

// let prompt = require('prompt-sync')()
// let a = prompt('Enter a number : ')

// for(let i=1; i<=a ; i++){
//     let ascii = 65;
//     for(let j=1; j<=i ; j++){
//         process.stdout.write(String.fromCharCode(ascii) + ' ')
//         ascii++
//     }
//     console.log()
// }

//? Q-4   Make a reverse right angle triangle [*]-

// let prompt = require('prompt-sync')()
// let a = prompt('Enter a number : ')

// for(let i=1; i<=a ; i++){
//     for(let j=1; j<=a-i+1 ; j++){      //* another logic  (let j =a ; j>=i ; j--)
//         process.stdout.write("* ")
//     }
//     console.log()
// }

//? Q-5  Mirror right angle triangle

// let prompt = require('prompt-sync')()
// let a = prompt('Enter a number : ')

// for(let i=1; i<=a ; i++){
//     //* inverted
//     for(j=1; j<=a-i; j++){
//         process.stdout.write(" ")
//     }
//     //* right
//     for(j=1; j<=i; j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

//? Q-6   Make an x -

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }


//? Q-7

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2*n; j++) {
    if (i == j || i + j == 2*n) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}