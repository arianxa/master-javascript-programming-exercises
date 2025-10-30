function getLengthOfShortestElement(arr) {
    if(arr.length===0){
        return 0
    }
let corto=arr[0]
for(let palabra of arr){
    if(palabra.length<corto.length){
        corto=palabra
    }

}   
return corto.length 
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
