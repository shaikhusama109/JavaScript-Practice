// https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true

function findDigits(n) {
    // Write your code here
   
    let divisibleCount=0;
    let splitDigits = [...n + ''].map(val => + val) 
    for (let i=0; i< splitDigits.length; i++){
        if( n % splitDigits[i] == 0){
            divisibleCount++
        }
    }
    return(divisibleCount)

}
