//* About Loops


//! FOR LOOPS

//? Q-1  Sum of n natural numbers and factorial of number.

// var pr = prompt("Kaha tak add karwaaoge");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid Input");
//   } else {
//     if (n > 0) {
//       var sum = 0;     //* For factorial use fact =1;
//       for (var i = 1; i <= n; i++) {
//         sum = sum + i;           //* fact = fact * 1;
//       }
//       console.log(sum);
//     } else {
//       console.log("The number should be +ve and greater than 0");
//     }
//   }
// }


//? Q-2  Find Factor of numbers
// var pr = prompt("Kaha tak add karwaaoge");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid Input");
//   } else {
//     if (n > 0) {
//       for (var i = 1; i<=Math.floor(n/2); i++) {
//         if(n%i === 0){
//             console.log(i)
//         }    
//       }
//       console.log(n)
//     } else {
//       console.log("The number should be +ve and greater than 0");
//     }
//   }
// }



//? Q-3  Prime number-
//* Use the upper syntax for this question.
//  var pr = prompt("Kaha tak add karwaaoge");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid Input");
//   } else {
//     if (n > 0) {
//       console.log(primeHai(n))
//     } else {
//       console.log("The number should be +ve and greater than 0");
//     }
//   }
// }


// function primeHai (n){
//  if (n<=1) return false
//  if (n==2) return true
//  if (n%2==0) return false
//  for(let i =3 ; i<=Math.floor(Math.sqrt(n)) ; i+=2){
//     if(n%i ==0 ) return false
//  }
//  return true
// }



//! WHILE LOOP

//? Q-1   Sum of digits

//* Use the above syntax in this question and put while loop instead of for 

// var sum = 0
// var n = 123456
// while(n>0){
//     var rem = n%10;
//     sum = sum + rem
//     n = Math.floor(n/10)
// }
// console.log((sum))


//? Q-2    Reverse number

// var rev = 0
// var n = 5689
// while(n>0){
//     var rem = n%10;
//     rev = rev*10 + rem
//     n = Math.floor(n/10)
// }
// console.log(rev)



//? Q-3  Strong number
// var sum =0
// var n = 40585
// var copy = n 
// while(n>0){
//     var rem = n%10 
//     var fact =1 
//     for(var i=1; i<=rem ; i++){
//         fact = fact*i
//     }
//     sum = sum+ fact
//     n= Math.floor(n/10)
// }
// if(copy === sum){
//     console.log('strong')
// }else  {
//     console.log('not strong')
// }



//? Q-4   Guess Random number

let random = Math.floor(Math.random() * 100) + 1;
let guess = -1;

while(guess !== random){

guess = Number(prompt('Guess a number between 1 - 100'));


    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Try again b/w 1-100");
        continue;
    }

    if (guess > random) {
        console.log('Too high, try again');
    } else if (guess < random) {
        console.log('Too low, try again');
    } else {
        console.log('Congrats 🎉 and number was', guess);
    }
}