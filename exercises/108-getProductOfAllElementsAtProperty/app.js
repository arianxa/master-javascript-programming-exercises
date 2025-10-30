function getProductOfAllElementsAtProperty(obj, key) {
     if(obj[key]==undefined){
        return 0
    }
    else if(obj[key].length===0){
        return 0
    }else if(!Array.isArray(obj[key])){

  
        return 0
    } 
    const producto = obj[key].reduce(function(acumulador, valorActual) {
  return acumulador + valorActual;
}, 0)
      return producto
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
