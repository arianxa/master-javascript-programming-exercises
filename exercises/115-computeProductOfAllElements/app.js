function computeProductOfAllElements(arr) {
  if (arr.length===0){
    return 0
  }
let producto =arr.reduce(function(acumulador,valorActual){
  return acumulador *valorActual},1 )
 
  return producto
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
