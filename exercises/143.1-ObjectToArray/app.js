function getAllKeys(obj) {
  let resultado = [];

  for (let key in obj) {
    resultado.push(key);
  }

  return resultado;
}
let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
