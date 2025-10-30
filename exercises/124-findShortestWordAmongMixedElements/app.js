function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) {
        return ""
    }

    let corto = "";
    for (let palabra of arr) {

        if (typeof palabra !== 'string') {
            continue;
        }
        if (corto === ""|| palabra.length < corto.length) {
            corto = palabra
        }
    }

    return corto

}


let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
