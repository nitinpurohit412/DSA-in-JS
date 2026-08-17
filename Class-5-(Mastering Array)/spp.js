//? Addition in array

// let arr = [10, 20, 30, 40, 50]

// let sum = 0
// for(let i =0; i<arr.length; i++){
//     sum+= arr[i]
// }

// console.log(sum)

//? Find max and min

// let arr = [10, 20, 50, 920, 56]
// let min = arr[0]    //* for max   min = arr[0]

// for(let i=1; i<arr.length; i++){
//     if(arr[i] < min){        //* arr[i] > max
//         min = arr[i]         //* max = arr[i]
//     }
// }
// console.log(min)

//?  Find second maximum second number

// let arr = [10, 25, 65, 80, 40, 1 , 89]
// let arr = [10, 25, 40, 40, 40, 40]  //* This case has a  extra point  and that is written in else if - after &&

// let max = Math.max(arr[0], arr[1])
// let sMax = Math.min(arr[0], arr[1])

// for(let i =2 ; i<arr.length; i++){
//     if(arr[i] > max){
//         sMax = max
//         max = arr[i]
//     } else if(arr[i] > sMax && max != arr[i]){
//         sMax = arr[i]
//     }
// }
// console.log(sMax)

//? Reverses arrying

//* Case 1 ---> (New space) - This is not very good to use.

// let arr = [1, 2, 3, 4, 5, 6];
// let temp = new Array(arr.length);

// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;  
// }
// console.log(temp)


//* Case 2 ---> Two pointer approach

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
 
// let i=0, j=arr.length-1

// while(i < j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr)


//? Move all 0 to left and all 1 to the right

// let arr = [0,1,1,0,1,0,0,1,0,1,1,0,0]
// let arr = [-1,2,8,-7,-5,9,5]         //*homework   --> if(arr[i] < 0) just change this line.

// let i= 0, j=0

// while(i<arr.length){
//     if(arr[i]==0){
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }
// console.log(arr)