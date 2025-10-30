function getElementOfArrayProperty(obj, key, index) {
                if(obj[key]==undefined){
        return undefined
    }
    else if(obj[key].length===0){
        return undefined
    }else if(!Array.isArray(obj[key])){

  
        return undefined
    } else if(index<0 || index >=obj[key].length){
        return undefined

    }
      return obj[key][index]
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
