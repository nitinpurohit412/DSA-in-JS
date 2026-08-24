//?   Recurssion

// function temp(n){
//     if(n==0) return
//     console.log("hello world")
//     // temp(n-1)    // OR  temp(--n)
// }
// temp(5)


//? Q-1  print from n-->1 
// function temp(n){
//     if(n==0) return
//     console.log(n)
//     temp(n-1)
// }
// temp(10)

//? Q-2  print from 1-->n
// function temp(n){
//     if(n==0) return
//     temp(n-1)
//     console.log(n)
// }
// temp(10)


//?  Q-3   Sum and factorial

//*   Sum

// function sum(n){
//     if(n==1) return 1
//     return n + sum(n-1)
// }
// console.log(sum(5))


//*  Factorial

// function fact(n){
//     if(n==1) return n;
//     return n * fact(n-1)
// }
// console.log(fact(8))


//?  Fibonacci series

// function fibTerms(n, first , second){
//     if(n==0) return
//     let third = first+second
//     process.stdout.write(third+ " ")
//     fibTerms(n-1, second, third)
// }
// let n =10
// process.stdout.write(0+ " "+ 1+ " ");
// fibTerms(n-2, 0 , 1)


//?  give sum for nth term (fibonacci) -->

// function fbo(n){
//     if(n==0 || n==1) return n;
//     return fbo(n-1) + fbo(n-2)
// }
// let n=8
// console.log(fbo(n))