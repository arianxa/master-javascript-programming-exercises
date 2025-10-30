function getLongestWordOfMixedElements(arr) {
 if(arr.length===0){
        return ""
    }
let corto ="";
for (palabra of arr){
     if(typeof palabra!=="string"){
        continue
    }
    if(corto===""||palabra.length>corto.length){
        corto=palabra
    }
}
return corto    
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
