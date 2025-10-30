function flipPairs(input) {
    let result = '';
    for (let i = 0; i < input.length; i += 2) {
        // Verifica si hay un par de caracteres
        if (i + 1 < input.length) {
            result += input[i + 1] + input[i]; // Añade el segundo carácter primero
        } else {
            result += input[i]; // Si es impar, solo añade el último carácter
        }
    }
    return result;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
