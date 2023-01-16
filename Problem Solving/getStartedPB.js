// https://www.hackerrank.com/challenges/tutorial-intro/problem?isFullScreen=true

function introTutorial(V, arr) {
    // Write your code here
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == V){
            return i
        }
    }
}
