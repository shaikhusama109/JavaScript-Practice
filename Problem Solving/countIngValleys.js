// Exercise https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true

function countingValleys(steps, path) {
    // Write your code here
     let positionOfHiker =0;
    let noOfValleys = 0;
    
    for(let i=0; i<steps; i++){
        if(path[i] == 'D'){
            positionOfHiker--
        }
        if(path[i] == 'U'){
            positionOfHiker++
            if(positionOfHiker == 0){
                noOfValleys++
            }
        }
    }
    return(noOfValleys)

}
