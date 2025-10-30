function computeSummationToN(n) {
let producto = 0; // empezamos en 1 para no afectar la multiplicación
  
  for (let i = 0; i <= n; i++) {
    producto += i; // multiplica el acumulado por cada número
  }

  return producto;

  
}

let output = computeSummationToN(6);
console.log(output); // --> 21

