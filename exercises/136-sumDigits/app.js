


function sumDigits(num) {
  const numeroComoCadena = num.toString();
  const digitos = numeroComoCadena.split('');

  let suma = 0;

  for (let i = 0; i < digitos.length; i++) {
    // Si encontramos un signo negativo, el siguiente dígito será negativo
    if (digitos[i] === '-') {
      suma += -parseInt(digitos[i + 1]);
      i++; // saltar el dígito siguiente, ya lo contamos como negativo
    } else {
      suma += parseInt(digitos[i]);
    }
  }

  return suma;
}
let output = sumDigits(-316);
console.log(output); // --> 4
