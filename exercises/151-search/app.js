function search(array, value) {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    let elementoMedio = array[medio];

    if (elementoMedio === value) {
      return medio;
    } else if (value < elementoMedio) {
      fin = medio - 1;
    } else {
      inicio = medio + 1;
    }
  }

  return null; // si no se encuentra
}
let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
