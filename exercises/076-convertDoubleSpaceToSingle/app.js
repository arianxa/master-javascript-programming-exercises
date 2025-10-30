function convertDoubleSpaceToSingle(str) {

let partes= str.split("  ");
let total=partes.join(" ");
return total    
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
