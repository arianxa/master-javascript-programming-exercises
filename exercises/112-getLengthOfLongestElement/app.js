function getLengthOfLongestElement(arr) {
    if(arr.length===0){
        return 0
    }
    let masLarga="";
    for (let palabra of arr){
     if (palabra.length > masLarga.length) {
  masLarga = palabra;
}
    }
return masLarga.length

}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
