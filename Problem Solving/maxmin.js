// Hacker Rank Max Min from an array  of 5 starting 4 value min and last 4 value max of sorted array

let arr = [23,3,26,6,8]
let sort = arr.sort(function(a, b){return a-b});
let n = sort.length;

let arrMin = 0;
let arrMax = 0;

// Min
    for(i=0; i<n-1; i++){
        arrMin += +sort[i];
        
       // arrMin= value;
    }
   console.log(arrMin)
    
//Max
    for(j=1; j<n; j++){
        arrMax += +sort[j];
        
    }
      
     console.log(arrMax)