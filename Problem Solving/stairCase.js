function staircase(n) {
    // Write your code here
let size = n;
  let space = 0
  let sign = 0
  for(let i=1; i<=size; i++){
    space = size - i
    sign = size - space
    console.log(`${' '.repeat(space)}${'#'.repeat(sign)}`)
  }
}