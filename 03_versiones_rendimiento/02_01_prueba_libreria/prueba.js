// cd 03_versiones_rendimiento/02_01_prueba_libreria
// npm i victoria-package

// COMMON JS
const calculadora = require("libreria-victoria-ch");

console.log(calculadora.sumar(2, 3));
console.log(calculadora.restar(5, 2));
console.log(calculadora.multiplicar(3, 4));
console.log(calculadora.dividir(10, 2));

// ES MODULE --> Cambiar package.json "type"; "module"
/* 
import { sumar, restar, multiplicar, dividir } from "libreria-victoria-ch";
// o
// import * as calculadora from "libreria-victoria-ch";

console.log(sumar(2, 3));
console.log(restar(5, 2));
console.log(multiplicar(3, 4));
console.log(dividir(10, 2));

*/
