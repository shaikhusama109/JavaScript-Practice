// Problem Detail
// https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true


let n = 5;
function viralAdvertising(n) {
    // Write your code here


let totalLikes = 0;
let person = 5;
for(let i = 0; i < n; i++){
    const liked = Math.floor(person / 2)
    totalLikes += liked;
    person = liked * 3
}

 return totalLikes
}
