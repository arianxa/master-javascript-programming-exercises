function convertObjectToList(obj) {
  let resultado = [];

  for (let key in obj) {
    resultado.push([key, obj[key]]);
  }

  return resultado;

}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
