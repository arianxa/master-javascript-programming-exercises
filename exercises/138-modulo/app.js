
function modulo(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return NaN;
  if (num2 === 0) return NaN;
  if (num1 === 0) return 0;

  let resto = num1 - Math.floor(num1 / num2) * num2;

  if (num1 < 0 && resto !== 0) {
    resto -= num2;
  }

  return resto;

}

let output = modulo(25, 4);
console.log(output); // --> 1
