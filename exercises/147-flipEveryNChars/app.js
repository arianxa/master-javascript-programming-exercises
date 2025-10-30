function flipEveryNChars(str, n) {
  let resultado = "";

  for (let i = 0; i < str.length; i += n) {
    let bloque = str.slice(i, i + n); // corta de n en n
    let invertido = bloque.split('').reverse().join(''); // invierte el bloque
    resultado += invertido; // añade al resultado
  }

  return resultado;
}
let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
