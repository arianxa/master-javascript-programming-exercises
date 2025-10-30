function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) {
    return 0
  }

  let numeros = arr.filter(item => typeof item === 'number');
  if (numeros.length === 0) {
    return 0
  }


  return  Math.min(...numeros)


}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
