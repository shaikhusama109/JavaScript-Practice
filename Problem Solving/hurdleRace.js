// A video player plays a game in which the character competes in a hurdle race. 
// Hurdles are of varying heights, and the characters have a maximum height they can jump.
//  There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. How many doses of the potion must the character take to be able to
//  jump all of the hurdles. If the character can already clear all of the hurdles, return 0 .


let k = 0
let height = [1,2,3,3,2]


function hurdleRace(k, height) {
    // Write your code here
     let prevHudle = 0;
    for (let hurdles of height){
       
        if (hurdles > prevHudle){
             prevHudle = hurdles;
        }
        
    }

     let portionNeeded = prevHudle - k;
            if(portionNeeded > 0 ) {
                console.log (portionNeeded)
            }
            else console.log("0")

}

hurdleRace(k ,height);