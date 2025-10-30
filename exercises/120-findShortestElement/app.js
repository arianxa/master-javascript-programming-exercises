function findShortestElement(arr) {
    if(arr.length===0){
        return ""
    }
let corto =arr[0];
for (palabra of arr){
    if(palabra.length<corto.length){
        palabra=corto
    }
}
return corto

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'