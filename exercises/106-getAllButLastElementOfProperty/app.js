function getAllButLastElementOfProperty(obj, key) {
                if(obj[key]==undefined){
        return []
    }
    else if(obj[key].length===0){
        return []
    }else if(!Array.isArray(obj[key])){

  
        return []
    } 
      
    return obj[key].slice(0,obj[key].length-1);

    
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
