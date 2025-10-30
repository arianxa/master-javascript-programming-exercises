function getLargestNumberAmongMixedElements(arr) {
 if(arr.length===0){
        return 0
    }
let numeros =arr.filter(item=>typeof item ==="number");
  if(numeros.length===0){
        return 0
    }
return Math.max(...numeros)
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
