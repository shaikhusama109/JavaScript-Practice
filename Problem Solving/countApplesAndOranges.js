// Exersice https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let houseStart = s
    let houseEnd = t
    let appleTree = a
    let orangeTree = b
    let noOfApples = 0
    let noOfOranges = 0
        for(let i =0; i<apples.length; i++){
            if(apples[i]+appleTree >= houseStart && apples[i]+appleTree<= houseEnd ) {
                noOfApples++
            }        
        }
        for(let i =0; i<oranges.length; i++){
            if(oranges[i]+orangeTree >= houseStart && oranges[i]+orangeTree<= houseEnd ) {
                noOfOranges++
            }        
        }
        console.log(noOfApples)
        console.log(noOfOranges)

}