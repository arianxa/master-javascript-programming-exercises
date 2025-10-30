function getAllLetters(str) {

/*for (let i = 0; i < str.length; i++ )   {
arr.push(str[i]);
} */
 let arrayDeLetras= str.split('');
 return arrayDeLetras
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
