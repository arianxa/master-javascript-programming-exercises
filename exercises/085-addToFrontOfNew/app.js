function addToFrontOfNew(arr, element) {
    let copia= arr.slice();
    copia.unshift(element)    
    return copia
    
    }

    let input = [1, 2];
    let output = addToFrontOfNew(input, 3);
    console.log(output); // --> [3, 1, 2];
    console.log(input); // --> [1, 2]

