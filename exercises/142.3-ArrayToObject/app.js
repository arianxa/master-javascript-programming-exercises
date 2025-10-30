function transformEmployeeData(array) {
let resultado=[]
for (let empleado of array){
let obj={}
for(let par of empleado){
    let clave = par[0];
  let valor = par[1];
  obj[clave] = valor;
}
resultado.push(obj);

} 
return resultado 
}
