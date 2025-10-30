function getAverageOfElementsAtProperty(obj, key) {
               if(obj[key]==undefined){
        return 0
    }
    else if(obj[key].length===0){
        return 0
    }else if(!Array.isArray(obj[key])){
 
        return 0
    } 
      let suma = 0;

  for (let i = 0; i < obj[key].length; i++) {
    suma += obj[key][i]; // sumamos cada elemento
  }

  let promedio = suma / obj[key].length;
  return promedio;
}