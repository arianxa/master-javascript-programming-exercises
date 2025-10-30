function findSmallestElement(arr) {
    if(arr.length===0){
        return 0
    }
let corto =arr[0];
for (palabra of arr){
    if(palabra.length<corto.length){
        palabra=corto
    }
}
return corto
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1