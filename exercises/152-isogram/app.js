function isIsogram(text) {
const strMin = text.toLowerCase();

  // 2. Crea un Set a partir del string para obtener caracteres únicos
  const caracteresUnicos = new Set(strMin);

  // 3. Compara la longitud del Set con la longitud del string
  // Si son iguales, no hay letras repetidas y es un isograma
  return caracteresUnicos.size === strMin.length;  
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
