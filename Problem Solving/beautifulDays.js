// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true

function beautifulDays(i, j, k) {
    // Write your code here
   let startDay= i;
    let endDay = j;
    let divisor = k
    let beautifulDay= 0;
    
    for(let i=startDay; i<=endDay ; i++){
        function reversedNum(i) {
        return (
            parseFloat(
            i
                .toString()
                .split('')
                .reverse()
                .join('')
            ) * Math.sign(i)
        )                 
        }
        let difference = (i-reversedNum(i))/k
        if(parseInt(difference) === difference ){
            beautifulDay++
        }
    }
    return(beautifulDay)

}
