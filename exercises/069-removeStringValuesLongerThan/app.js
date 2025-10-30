function removeStringValuesLongerThan(num, obj) {
 for(let key in obj){
    let value=obj[key]
    if (value.length > num){
        delete obj[key];
    }
}    
return obj
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
