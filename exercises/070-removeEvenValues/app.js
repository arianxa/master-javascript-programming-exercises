function removeEvenValues(obj) {
  for (let key in obj) {
     let value = obj[key] 
     if (value % 2 === 0) 
      { delete obj[key]; } 
    } 
     return obj
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
