function average(arr) {
  const promedio = sum(arr) / arr.length;
return promedio
}

function sum(arr) {
const suma = arr.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
return suma
  
}

console.log(average([1, 2])); // --> 1.5
