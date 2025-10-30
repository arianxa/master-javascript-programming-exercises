function squareElements(arr) {
let extra=arr.map(function(item){
  return item**2
})  
return extra
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
