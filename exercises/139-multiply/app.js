function multiply(num1, num2) {
  let resultado = 0;

  // Caso especial: si alguno es 0
  if (num1 === 0 || num2 === 0) return 0;

  // Convertimos los números a positivos para hacer el bucle
  let positivo1 = Math.abs(num1);
  let positivo2 = Math.abs(num2);

  for (let i = 0; i < positivo1; i++) {
    resultado += positivo2;
  }

  // Si solo uno de los dos es negativo, el resultado debe ser negativo
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    resultado = -resultado;
  }

  return resultado;
}

let output = multiply(4, 7);
console.log(output); // --> 28
