function sockMerchant(n, ar) {
  // Write your code here

  // let pairOfSocks = 0
  // for(let i = 0; i<n; i++){
  //     for(let j=i+1; j<n; j++){
  //         if(ar[i]==ar[j] ){
  //             pairOfSocks++
  //             i++
  //             break;
  //         }
  //     }
  // }
  // console.log(pairOfSocks)

  // let sortedArray= ar.sort((a, b)=> a - b );
  // console.log(sortedArray)
  // for(let i=0; i<n; i++){
  //     for(let j=i+1; j<n; j++){
  //         if(sortedArray[i]==sortedArray[j]){

  //             console.log(sortedArray[i],sortedArray[j])
  //         }
  //     }
  // }
  let match = 0;
  let sortedArray = ar.sort();
  console.log(sortedArray);
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      match++;
      i++;
    }
  }
  console.log(match);
}

sockMerchant(9, [ 30, 20, 20, 10, 10, 30, 50, 10, 20, 50]);
