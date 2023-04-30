// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

function timeConversion(s) {
    
    let hrs = s.slice(0, 2)
    let timeSpan = s.slice(8);


    if (timeSpan == 'PM' && Number(hrs) < 12) {
        hrs = Number(hrs) + 12
        // return hrs
    } else if (timeSpan == 'AM' && Number(hrs) == 12) {
        hrs = "0" + (Number(hrs) - 12)
        // return hrs
    } else {
        hrs = hrs
        // return hrs
    }

    let result = hrs + s.slice(2, 8)
    return result;
}