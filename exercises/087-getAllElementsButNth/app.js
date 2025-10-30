function getAllElementsButNth(array, n) {
array.splice(n,1)
return array
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
