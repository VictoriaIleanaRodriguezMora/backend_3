// el método complete, va a dar error si quiero marcar como complete una tarea que no encuentra
// esto tengo que poder probarlo con los tests
import Chai from "chai";
import { expect, assert } from "chai";
import { Tareas } from "../utils/tareas";

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
  it("Cuando se cree la instancia de la clase, debe estar el array de tareas Wvacío", () => {
    // preparación
    const tareas = new Tareas();
    // ejecución
    const listadoTareas = tareas.list();
    // afirmaciones/asserciones. Son todos equivalentes
    expect(listadoTareas).to.have.lengthOf(0);
    assert.lengthOf(listadoTareas, 0);
    assert.strictEqual(listadoTareas.lengthOf, 0);
  });
});
