function transformFirstAndLast(array) {
primer = array[0]
ultimo = array[array.length - 1]
obj = {}
obj[primer] = ultimo
return obj
  
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
