  //https://www.hackerrank.com/challenges/equality-in-a-array/problem
  
  
  // Write your code here
  
  let obj = {};
  for(let i = 0; i<arr.length; i++){
      if(!obj[arr[i]]){
          obj[arr[i]] = 1;
      }else{
          obj[arr[i]]+= 1;
      }
  }
  let max = 0;
  for (let key in obj) {
      if (obj[key] > max) {
          max = obj[key];
      }
  }
  let sum = 0;
  let valueArr = Object.values(obj)
  for (let i = 0; i <  valueArr.length; i++) {
      sum+= valueArr[i];
  }
  return sum-max; 