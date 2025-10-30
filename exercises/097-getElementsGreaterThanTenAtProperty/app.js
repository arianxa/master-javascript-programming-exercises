function getElementsGreaterThan10AtProperty (obj,key){
            if(obj[key]==undefined){
        return []
    }
    else if(obj[key].length===0){
        return []
    }else if(!Array.isArray(obj[key])){

  
        return []
    } 
      return obj[key].filter(function(item) {
    return item > 10;
  });
}