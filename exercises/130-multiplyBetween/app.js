function multiplyBetween(num1, num2) {
let producto = 1; // empezamos en 1 para no afectar la multiplicación
   if(num2<num1){
        return 0
    }
  for (let i = num1; i < num2; i++) {
    producto *= i; // multiplica el acumulado por cada número
  }

  return producto;

}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
