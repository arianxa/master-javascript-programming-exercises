function computeAverageOfNumbers (arr){
      if (arr.length === 0) {
    return 0;
  }
let suma = 0;
for (let i = 0; i < arr.length; i++) {
  suma += arr[i];
}
return suma / arr.length;
}