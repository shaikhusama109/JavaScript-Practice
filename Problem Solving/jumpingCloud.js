function jumpingOnClouds(c) {
  // Write your code here
  // let noOfSteps = 0;
  // let check = 0
  // for (let i = 0; i < c.length; i++) {
  //   if(c[i] == 0) {
  //     for(let j = i+2; j< c.length- i; j++){
  //       if(c[j] == 1){
  //         noOfSteps++
  //       }
  //       else if(c[j+1] == c[j] && c[j] != c[j+2]){
  //         noOfSteps++
  //       }
  //     }
  //       // if (c[i+1] == c[i] && c[i+2] == !c[i] ) {
  //       //     noOfSteps++
  //       // }
  //       // else if(c[i+1] == c[i] && c[i+2] == c[i] ){
  //       //     noOfSteps++
  //       // }
  //       // else if(c[i+1] == !c[i] && c[i+2] == c[i] ){
  //       //     // noOfSteps++
  //       // }

  //   }
  // }
  // console.log(noOfSteps);

  let result = 0;

  const lengthOfArray = c.length;
  for (let i = 0; i < lengthOfArray - 1; ) {
    if (i < lengthOfArray - 2 && c[i + 2] == 0) {
      i = i + 2;
    }
    else {
      i++
    }
    result++;
  }

  return result;
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]))
