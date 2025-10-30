function filterOddElements(arr) {
  let extra=arr.filter(function(item){
  return item %2!==0
})  
return extra
  
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
