let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
for(let key in obj){
    let value=obj[key]
    if (value > num){
        delete obj[key];
    }
}    
return obj
}
