function getNthElementOfProperty (obj,key,n){
    

 if(obj[key]== undefined){
    return undefined
 }else if(!Array.isArray(obj[key])){
    return undefined
 }else if(obj[key].length==0){
    return undefined
 }else if (n>=obj[key].length|| n<0){
    return undefined
 }
 else{
    return obj[key][n]
 }
}