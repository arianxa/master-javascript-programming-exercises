function detectOutlierValue(string) {
    let numbers = string.split(" ").map(Number); // Convertimos la cadena a un arreglo de números
    let evens = []; // Arreglo para números pares
    let odds = [];  // Arreglo para números impares

    // Clasificar números en pares e impares
    numbers.forEach((number, index) => {
        if (number % 2 === 0) {
            evens.push(index + 1); // Guardamos la posición (1-index)
        } else {
            odds.push(index + 1); // Guardamos la posición (1-index)
        }
    });

    // Si hay más pares, el número aislado es impar y viceversa
    return evens.length === 1 ? evens[0] : odds[0];
}


// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
