import Calc from "../calculadora";

// Con describe creamos un grupo de testing
// Recibe 2 parametros: el título del test, y la fn callback con las pruebas (it) que va a ejecutar

// it, recibe 2 parametros tambien: el título de lo que va a ejecutar, y la fn callback

describe("Conjunto de pruebas de Calculadora", () => {
  // Acá van los tests
  it("Debe sumar 2 números", () => {
    // Etapa de preparación --> Voy a crear los valores que se van a ejecutar
    const num1 = 5;
    const num2 = 5;
    const rtado_esperado = num1 + num2;

    // Etapa de ejecución
    const rtado = Calc.suma(num1, num2);

    // Etapa de verificación
    expect(rtado).toBe(rtado_esperado);
  });
  it("Si algún parametro no es númerico, debería responder con un error", () => {
    const num1 = 5;
    const num2 = ["hola"];

    // Etapa de ejecución
    const funcionTest = () => Calc.suma(num1, num2); // Me retorna el valor de la ejecución de la funcion Calc.suma
    // Etapa de verificación
    // La función Calc.suma, cuando recibe un string, devuelve Argumentos invalidos, por eso evaluo esa frase
    expect(funcionTest).toThrow("Argumentos inválidos");
  });
});
