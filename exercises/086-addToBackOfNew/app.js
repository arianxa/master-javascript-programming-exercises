function addToBackOfNew(arr, element) {
let clone= arr.slice()
clone.push(element)
return clone    
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
