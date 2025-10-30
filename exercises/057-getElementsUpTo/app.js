      function getElementsUpTo(array, n) {
let array2=array.slice(0,n);
return array2  
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
