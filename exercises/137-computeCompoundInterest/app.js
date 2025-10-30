function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  const tasaPorPeriodo = interestRate / compoundingFrequency; // r/m
  const numeroTotalPeriodos = compoundingFrequency * timeInYears; // m * t

  const montoFinal = principal * Math.pow(1 + tasaPorPeriodo, numeroTotalPeriodos);

  // Solo el interés compuesto
  const interesGenerado = montoFinal - principal;

  return interesGenerado;
}

let output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.83682213410543
