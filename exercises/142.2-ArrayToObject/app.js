function fromListToObject(array) {
let obj={}
for (let par of array){
    let clave = par[0];
  let valor = par[1];
  obj[clave] = valor;
}
  return obj
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
