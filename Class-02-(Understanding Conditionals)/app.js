//* Conditional Statement

//? Q-1 Valid Voter

// let age = Number(prompt("What is your age -"));

// if(isNaN(age)){
//     console.log("This is a wrong input");
// } else if(age>=18){
//     console.log("You are eligible for voting")
// }else{
//     console.log("You are not eligible for voting");
// }

//? Q-2  Shop Discount

// let bill = Number(prompt("Enter the amount of your bill - "));
// let dis = 0;
// if (bill > 0 && bill <= 5000) {
//     dis = 0
// } else if (bill > 5000 && bill <= 7000){
//     dis = 5
// } else if (bill > 7000 && bill <= 9000){
//     dis = 10
// } else if (bill > 9000){
//     dis = 20
// } else{
//     console.log("Wrong Input");
// }
// console.log(bill - Math.floor((dis*bill)/100));

//! Q-3  Bijli bill     [Important]

// let unit = Number(prompt("Enter electricity unit - "))
// let amount = 0;

// if(unit>400){
//     amount = (unit-400) * 13
//     unit = 400
// }
// if(unit>200 && unit<=400){
//     amount += (unit-200) * 8
//     unit = 200
// }
// if(unit>100 && unit<=200){
//     amount += (unit-100) * 6
//     unit = 100
// }
// amount += unit*4

// console.log(amount);

//? Q-4    Inr Denomination

// let amount = Number(prompt("Enter amount - "));

// if (amount >= 500) {
//   console.log("500rs notes : " + Math.floor(amount / 500));
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   console.log("200rs notes : " + Math.floor(amount / 200));
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   console.log("100rs notes : " + Math.floor(amount / 100));
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log("50rs notes : " + Math.floor(amount / 50));
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   console.log("20rs notes : " + Math.floor(amount / 20));
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   console.log("10rs notes : " + Math.floor(amount / 10));
//   amount = amount % 10;
// }
// if (amount >= 2) {
//   console.log("2rs coins : " + Math.floor(amount / 2));
//   amount = amount % 2;
// }
// if (amount === 1) {
//   console.log("1rs coins : " + amount);
// }





//! Extra point for Switch Case...


// let sum = 0.1 + 0.2;
// sum = Number(sum.toFixed(1));
// switch (sum) {
//   case 0.3:
//     console.log("hello");
//     break;

//   case 0.4:
//     console.log("hey");
//     break;

//   default:
//     console.log("namaste");
// }
