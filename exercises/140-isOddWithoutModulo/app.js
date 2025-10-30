function isOddWithoutModulo(num) {
      return !Number.isInteger(num / 2);

}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
