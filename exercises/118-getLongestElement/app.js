function getLongestElement(arr) {
    if(arr.length===0){
        return ""
    }
let corto=""
for(let palabra of arr){
    if(palabra.length>corto.length){
        corto=palabra
    }

}   
return corto
    
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
