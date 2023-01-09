// https://www.hackerrank.com/challenges/minimum-distances/problem?isFullScreen=true


function minimumDistances(a) {
    // Write your code here
    let arrLength = a.length;
    let difference = [];
    let min = 0;
    for(let i=0; i<arrLength; i++){
        for(let j=i; j< arrLength; j++){
            if(a[i]==a[j] && i!=j){
                let distance = j-i
                difference.push(distance)
            }
        }
    }
        // console.log(difference)
            if(difference.length == 0){
                return(-1)
        }
        else {
            min = Math.min(...difference)
            return(min)
        }
    
}