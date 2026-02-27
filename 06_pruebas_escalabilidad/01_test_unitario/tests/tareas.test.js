// el método complete, va a dar error si quiero marcar como complete una tarea que no encuentra
// esto tengo que poder probarlo con los tests
// import Chai from "chai";
// import { expect, assert } from "chai";
// import { Tareas } from "../utils/tareas";
// src/tests/tareas.test.js
const Chai = require("chai");
const { expect, assert } = Chai;
const { Tareas } = require("../utils/tareas");

// describe. recibe una descripcion y una funcion callback | carga el conjunto de tests individuales
// describe("", () => {});
// it - define un test individual, tambien recibe una descripcion y una funcion callback
/* 
ETAPAS de it
- preparación
- ejecución
- afirmaciones/asserciones (lo que corresponda al título) | expect
06_pruebas_escalabilidad\02_testing_unitario_dao\src\tests\tareas.test.js
 */
describe("Tests unitarios de las tareas ", () => {
  it("Cuando se cree la instancia de la clase, debe estar el array de tareas vacío", () => {
    // preparación
    const tareas = new Tareas();
    // ejecución
    const listadoTareas = tareas.list();
    // afirmaciones/asserciones. Son todos equivalentes
    expect(listadoTareas).to.have.lengthOf(0);
    // assert.lengthOf(listadoTareas, 0);
    // assert.strictEqual(listadoTareas.lengthOf, 0);
  });

  it("Verificar que agrega la tarea creada", () => {
    // preparación
    const tareas = new Tareas();
    // ejecución
    tareas.add("Agregando una tarea");
    const listadoDeTareas = tareas.list();
    // afirmaciones/asserciones. Verifico que se haya agregado la tarea
    assert.strictEqual(listadoDeTareas.length, 1);

    assert.deepStrictEqual(listadoDeTareas, [
      { title: "Agregando una tarea", complete: false },
    ]);
  });

  it("Verificar que agrega la tarea creada", () => {
    // preparación
    const tareas = new Tareas();
    // ejecución
    tareas.add("Agregando una nueva tarea");
    tareas.complete("Agregando una nueva tarea");
    tareas.add("Agregando otra nueva tarea");
    const listadoDeTareas = tareas.list();
    // afirmaciones/asserciones. Verifico que se haya agregado la tarea

    assert.deepStrictEqual(listadoDeTareas, [
      { title: "Agregando una nueva tarea", complete: true },
      { title: "Agregando otra nueva tarea", complete: false },
    ]);
  });

  // el mns de error debe ser tal cual al definido en la clase
  it("Debería dar un error al intentar completar una tarea inexistente", () => {
    // preparación
    const tareas = new Tareas();
    const msgError = "Tarea no encontrada";
    // ejecución
    tareas.add("Tarea agregada");
    const fnTest = () => tareas.complete("Tarea que no existe");
    // afirmaciones/asserciones. Verifico dé un error. Está bien que dé un error, sino estaría mal la lógica
    expect(fnTest).to.throw(Error, msgError);
    // assert.throws(fnTest, Error, msgError) // es lo mismo que expect
    /*
    expect(funcion de la que se va a evaluar su output).to.throw(error a recibir, el mensaje de error)
    */
  });
});
