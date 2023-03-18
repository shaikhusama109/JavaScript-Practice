// // Given an array of integers and a positive integer "k" 
// // , determine the number of(i,j)  pairs where (i<j)and ar[i] + ar[j] is 
// // divisible by "k".


// let ar= [1,2,3,4,5,6];
// let n = ar.length;
// let k = 5;

// function divisibleSumPairs(n, k, ar) {
//     // Write your code here
//     let noOfPairs = 0;
//     for (let i=0; i<n; i++){
//         for (let j= 0; j<n; j++){
//             let sumOfPairs = ar[i] + ar[j];
//             if( i < j && sumOfPairs % k == 0){
//                 noOfPairs ++
//             }
//         }
//     }
//         return noOfPairs;
// }