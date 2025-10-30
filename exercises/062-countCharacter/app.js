function countCharacter(str, char) {
  let contador = 0; // Inicializa el contador en 0
  for (let i = 0; i < str.length; i++) { // Recorre la frase carácter por carácter
    if (str[i].toLowerCase() === char.toLowerCase()) { // Compara la letra actual (en minúsculas) con la letra buscada (en minúsculas)
      contador++; // Incrementa el contador si son iguales
    }
  }
  return contador; // Devuelve el total
}
let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
