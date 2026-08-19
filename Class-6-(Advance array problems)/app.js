//*  Advance Array Problems --->

//? Q-1    Left and Right rotation by one element.

//* Left
// let arr = [1,2,3,4,5]

// let copy = arr[0]

// for(let i=0; i<arr.length -1 ; i++){
//     arr[i] = arr[i+1]

// }

// arr[arr.length -1] = copy
// console.log(arr)

//* Right
// let arr = [1,2,3,4,5]

// let copy = arr[arr.length -1 ]

// for(let i =arr.length -1  ; i>0 ; i--){
//     arr[i] = arr[i-1]
// }
// arr[0] = copy

// console.log(arr)

//? Q-2  Left and Right rotation by k element

//* Left
// let prompt = require("prompt-sync")()
// let k =  Number(prompt("Enter k value : "))
// let arr = [1,2,3,4,5]
// let temp = new Array(arr.length)
// k = k % arr.length

// for(let i=0; i < arr.length ; i++){
//     temp[i]= arr[(i+k) % arr.length]
// }
// console.log(temp)

//* Right
// let prompt = require("prompt-sync")()
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter k value: "));
// for (let i = 0; i < arr.length; i++) {
//   temp[(i+k)% arr.length] = arr[i];
// }
// console.log(temp);

//?  Block swap reverse algorithm

// //* Left

// let arr = [1,2,3,4,5]
// let prompt = require("prompt-sync")()
// let k = Number(prompt("Enter a number : "))
// k  = k % arr.length
// reverse(0 , k-1)
// reverse(k , arr.length-1)
// reverse(0, arr.length -1 )

// function reverse(i, j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j--
//     }
// }
// console.log(arr)

//* Right

// let arr = [1,2,3,4,5]
// let prompt = require("prompt-sync")()
// let k = Number(prompt("Enter a number : "))
// k  = k % arr.length
// reverse(0 , arr.length -1 )
// reverse(0 , k -1)
// reverse(k, arr.length -1 )

// function reverse(i, j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j--
//     }
// }
// console.log(arr)

//? Merging of sorted array

// let arr1 = [2, 5, 6];
// let arr2 = [1, 3, 4, 8];

// let merge = new Array(arr1.length + arr2.length);
// let i = (j = k = 0);

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i] < arr2[j]){
//         merge[k++] = arr1[i++]
//     }else{
//         merge[k++] = arr2[j++]
//     }
// }

// while(j<arr2.length){
//     merge[k++] = arr2[j++]
// }
// while(i<arr1.length){
//     merge[k++] = arr1[i++]
// }

// console.log(merge)



//! Sort the color (leetcode question - 75)

// var sortColors = function (nums) {
//     let i =0 , j = 0
//     let k = nums.length - 1

//     while (i <= k) {
//         if (nums[i] == 0) {
//             swap(nums, i, j)
//             i++
//             j++
//         }else if (nums[i] == 2) {
//             swap(nums, i, k)
//             k--
//         }else { i++ }
//     }
// };
// function swap(nums, i, j) {
//     [nums[i], nums[j]] = [nums[j], nums[i]];
// }


//!  MAximun Subarray (Leetcode - 53)

// var maxSubArray = function(nums) {
//     let max = -Infinity
//     let sum = 0
//     for(let i=0; i<nums.length; i++){
//         sum += nums[i]
//         max = Math.max(max , sum) 
//         if(sum <0) sum =0
//     }
//     return max;
// }; 

//! Trapping rain water (LeetCode - 42 )
