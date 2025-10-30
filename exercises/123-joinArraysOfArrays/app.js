function joinArrayOfArrays(arr) {
  let resultado=[];
for (let subArray of arr){
  resultado =resultado.concat (subArray)
}
return resultado
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
