// // A person wants to determine the most expensive computer keyboard and USB drive that 
// // can be purchased with a give budget. Given price lists for keyboards 
// // and USB drives and a budget, find the cost to buy them.
// //  If it is not possible to buy both items, return .

// let b = 10/
// let keyboards = [3, 1]
// let drives = [5, 2, 8]

// function getMoneySpent(keyboards, drives, b) {
//     /*
//      * Write your code here.
//      */
//     let maxValue = 0

//         for (const keyboard of keyboards) {
//             for (const drive of drives) {
//                 const sum = keyboard + drive
//                 if (maxValue < sum && sum <= b) {
//                     maxValue = sum
//                 }
//             }
//         }

//         if (maxValue == 0) {
//             return -1
//         }
//         return maxValue;
//     }
