function cutTheSticks(arr) {
    // Write your code here
    let sortedArray=arr.sort()
    let length = sortedArray.length
    let min = Math.min(...sortedArray)
    let noOfIterations = 0
    
        for(let i = 0 ; i < length; i++){
            if(sortedArray[i] == min){
                sortedArray.splice(i,1)
                min = Math.min(...sortedArray)
            }
        }
        console.log(sortedArray)
        
}
cutTheSticks([5, 4, 4, 2, 2, 8])