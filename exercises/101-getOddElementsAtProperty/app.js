function getOddElementsAtProperty(obj, key) {
               if(obj[key]==undefined){
        return []
    }
    else if(obj[key].length===0){
        return []
    }else if(!Array.isArray(obj[key])){

  
        return []
    } 
      return obj[key].filter(function(item) {
    return item %2!==0;
  });
    
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
