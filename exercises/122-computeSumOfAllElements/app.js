function computeSumOfAllElements(arr) {
let numeros=arr.reduce(function(acumulador,valorActual){
  return acumulador + valorActual
},0)
return numeros
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
