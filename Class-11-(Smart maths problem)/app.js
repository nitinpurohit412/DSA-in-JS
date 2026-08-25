//?  HCF 

// let a=32, b =20

// while(a !=b ){
//     if(a>b) a = a-b
//     else b = b-a
// }
// console.log(a)
// console.log(b)

//*  Recurrsive way

// function gcd(a,b){
//     if(a==b) return a
//     if(a>b) return gcd(a-b, b)
//     return gcd(b, b-a)
// }
// console.log(gcd(a,b))

//*  Another method 

// function gcd(a,b ){
//     if(b==0) return a
//     return gcd(b, a%b)
// }
// console.log(gcd(233,144))



//?  Factor of number

// let n = 100;
// for(let i=1; i <= Math.floor(Math.sqrt(n)); i++){
//     if(n % i ==0 ){
//         process.stdout.write(i+ " ")
//     }
// }
// for(let i=Math.floor(Math.sqrt(n)); i >= 1 ; i--){
//     if(n % i ==0 ){
//         if(n/i != i){
//             process.stdout.write(n/ i+ " ")
//         }
//     }
// }


//?  Count of prime     
 //!  SEIVE OF ERATOSTHENES

// let n =30
// let arr = new Array(n+1).fill(true)

// for(let i=2 ; i<=Math.floor(Math.sqrt(n)); i++){
//     if(arr[i]){
//         for(let j = i*i; j<=n; j+=i){
//             arr[j] = false
//         }
//     }
// }
// for(let i=2; i<arr.length; i++){
//     if(arr[i]) process.stdout.write(i+ " ")
// }