// https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true

function camelcase(s) {
    let noOfCamelCase=1;
    for(let i = 0; i < s.length; i++){
        if( s.charCodeAt(i) >= 65 && s.charCodeAt(i)<=90 ){
            noOfCamelCase++
        }
    }
    return(noOfCamelCase)

}