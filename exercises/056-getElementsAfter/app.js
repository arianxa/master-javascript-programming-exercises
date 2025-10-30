function getElementsAfter(array, n) {
let arra2=array.slice(n+1);
return arra2;  
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
