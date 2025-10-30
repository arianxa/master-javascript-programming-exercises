function getLargestElementAtProperty(obj, key) {
             if(obj[key]==undefined){
        return []
    }
    else if(obj[key].length===0){
        return []
    }else if(!Array.isArray(obj[key])){

  
        return []
    } 
    return Math.max(...obj[key]);
    
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
