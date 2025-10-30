function calculateBillTotal(preTaxAndTipAmount) {

    
let precio1 = preTaxAndTipAmount * 15 /100;  
let precio2 = preTaxAndTipAmount * 9.5 /100;  
let total= precio1 +precio2




return  total + preTaxAndTipAmount
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
