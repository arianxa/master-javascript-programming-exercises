function removeStringValues(obj) {
 for (let key in obj){
    let value= obj[key]
    if(typeof value === 'string'){
        delete obj[key]
    }
 }
 return obj
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
