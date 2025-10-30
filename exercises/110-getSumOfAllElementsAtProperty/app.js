function getSumOfAllElementsAtProperty(obj, key) {
    if(obj[key]==undefined){
    return 0
}
    if(obj[key].length===0){
        return 0
    }
if(!Array.isArray(obj[key])){
return 0
}    
if(obj[key]==undefined){
    return 0
}
let producto=obj[key].reduce(function(acumulador,valorActual){
    return acumulador+valorActual
},0)
return producto
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13



 