// cd 03_versiones_rendimiento/02_00_libreria
// Common JS
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
};
// ES MODULE --> Cambiar package.json "type"; "module"

/*
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => a / b;
*/
