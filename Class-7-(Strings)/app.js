//?  Print each charater in new line

// let s = "selecto"
// for(let i=s.length-1; i>=0; i--){
//     console.log(s[i])
// }



//?  Print in reverse order

// let s = "selecto"
// let rev = ""

// for(let i=s.length -1 ; i>=0; i--){
//     rev = rev + s.charAt(i)
// }
// console.log(rev)


//?  check if the string is pallindrome or not

// let prompt = require("prompt-sync")();

// let s = prompt("Enter a string to check pallindrome :")
// let ispallindrome = true

// let i=0, j=s.length-1

// while(i<j){
//     if(s.charAt(i) != s.charAt(j)){
//         ispallindrome = false;
//         break
//     }
//     i++
//     j--
// }
// if(ispallindrome) console.log("Pallindrome")
// else console.log("Not pallindrome")



//? Toggle each character

// let prompt = require("prompt-sync")();
// let s = prompt("Enter a string : ")
// console.log(s)

// let toggle = ""
// for(let i=0; i<s.length-1; i++){
//     let ch = s.charCodeAt(i)

//     if(ch>=65 && ch<=90){
//         toggle = toggle + String.fromCharCode(ch + 32)
//     } else if (ch>= 97 && ch<=122){
//         toggle = toggle + String.fromCharCode(ch - 32)
//     }
// }
// console.log(toggle)



//?  Frequency of each character

//  let prompt = require("prompt-sync")();
//  let s = prompt("Enter a string : ")
//  let arr = new Array(128).fill(0)

// for(let i=0; i<s.length;i++ ){
//     let idx = s.charCodeAt(i)
//     arr[idx] = arr[idx] + 1
// }

// for(let i=0; i<arr.length; i++){
//     if(arr[i]>0){
//         console.log(String.fromCharCode(i) + " appears at " + arr[i] + " times")
//     }
// }