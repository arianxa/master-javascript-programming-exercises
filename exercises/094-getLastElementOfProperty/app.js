function getLastElementOfProperty(obj, key ){
        if(obj[key]==undefined){
        return undefined
    }
    else if(obj[key].length===0){
        return undefined
    }

    else if(!Array.isArray(obj[key])){
        return undefined
    }else{
    return obj[key][obj[key].length-1]}
}