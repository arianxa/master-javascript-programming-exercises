function getIndexOf(char,str){
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i; // Devuelve el índice de la primera ocurrencia
    }
  }
  return -1; // Devuelve -1 si el carácter no se encuentra
}