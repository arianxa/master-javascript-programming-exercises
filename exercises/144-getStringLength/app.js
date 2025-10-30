function getStringLength(string) {
  let contador = 0;

  while (string !== "") {
    string = string.slice(1); // corta el primer carácter
    contador++;
  }

  return contador;
 
}

let output = getStringLength('hello');
console.log(output); // --> 5
