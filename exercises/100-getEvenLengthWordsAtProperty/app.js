function getEvenLengthWordsAtProperty(obj, key) {
               if(obj[key]==undefined){
        return []
    }
    else if(obj[key].length===0){
        return []
    }else if(!Array.isArray(obj[key])){

  
        return []
    } 
      return obj[key].filter(function(item) {
    return item.length %2===0;
  });
    
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
