function getLargestElement(arr) {
  if(arr.length===0){
    return 0
  }
  let x=Math.max(...arr)
  return x
  
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;