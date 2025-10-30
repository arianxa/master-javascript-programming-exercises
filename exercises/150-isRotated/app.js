function isRotated(str1, str2) {
  if (str1.length !== str2.length) return false;

  // Si son iguales ya, también es una rotación válida (rotación 0)
  if (str1 === str2) return true;

  // Truco: todas las rotaciones de 'a' están dentro de 'a+a'
  return (str1 + str1).includes(str2);    
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
