function countAllCharacters(str) {
    let obj = {}

    for (const letra of str) {
        if (obj[letra]) {
            obj[letra] += 1;
        } else {
            obj[letra] = 1;
        }
    } // o simplemente `letra` si es solo para listar


    return obj
}
