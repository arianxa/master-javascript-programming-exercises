function select(arr,obj){
    let nuevoObj={}
for (let key of arr){

    nuevoObj[key]=obj[key]

}
return  nuevoObj
}