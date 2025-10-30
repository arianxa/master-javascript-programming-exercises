function computeFactorialOfN(n) {

  if (n < 0) {
    return "El factorial no está definido para números negativos.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i; // Multiplica resultado por i
  }
  return resultado;

    
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
