let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
let cantidadPropiedades = Object.values(obj).length;   
return cantidadPropiedades
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
