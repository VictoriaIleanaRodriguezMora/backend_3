// con ASSERT - nativo de node
import assert from "node:assert"; // a partir de node 18 importar así modulos nativos
import Users from "../dao/Users.dao.js";
import { describe, test, before } from "node:assert";
import mongoose from "mongoose"; // para limpiar la bdd
import connectBdd from "../utils/bdd_connection.js";

/*
- El get debe devolver un arreglo
El Dao debe agregar correctamente un elemento a la base de datos. 
Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto.
El Dao puede obtener  a un usuario por email
*/

// beforeEach y afterEach, se ejecutan antes y despues de cada uno de los it.

const createUser = () => {
  return {
    first_name: "Fulano",
    last_name: "Apellido fulano",
    email: "elemail@gmail.com",
    password: "dskjglhk",
    role: "user",
  };
};

describe("Test unitarios del DAO de usuarios con ASSERT de NODE 100%", () => {
  before(async () => {
    // antes de que se ejecuten los it de este describe, se va a ejecutar lo que está en este before
    await connectBdd();
    await mongoose.connection.collections["users"].drop(); // para que las pruebas inicien con la coleccion limpia
    console.log("Se limpió la bdd");
  });

  after(() => {
    // se ejecuta, despues que finalizan todas las pruebas
    console.log("Finalizaron las pruebas");
  });

  test("Debería registrar un usuario", async () => {
    const obj = createUser();
    const response = await Users.save(obj);
    const users = await Users.get();

    assert.ok(response._id);

    assert.strictEqual(response.first_name, obj.first_name);
    assert.strictEqual(typeof response.first_name, "string");

    assert.strictEqual(response.last_name, obj.last_name);
    assert.strictEqual(response.email, obj.email);
    assert.strictEqual(response.password, obj.password);
    assert.strictEqual(response.role, obj.role);

    assert.strictEqual(users.length, 1);
  });

  test("Debería retornar todos los usuarios", async () => {
    const users = await Users.get(); // lista de usuarios
    assert.equal(Array.isArray(users), true); // =
    assert.deepEqual(users.lenght, 0); // ==
    assert.deepEStrictEqual(users, []); // ===
    assert.notEqual(users, {}); // !=
    assert.doesNotThrow(() => users); // retorna la rta de la consulta. verifica que NO devuelva un error
  });

  test("Debería encontrar un documento de usuarios por id", async () => {
    const obj = createUser();
    const response = await Users.save(obj);

    const responseId = response._id.toString();

    const findNewUser = await Users.getOne({ _id: response._id });

    assert.strictEqual(findNewUser._id.toString(), responseId);
  });

  test("Debería encontrar un documento por email", async () => {
    const obj = createUser();
    const response = await Users.save(obj);

    const findNewUser = await Users.getOne({ email: response.email });

    assert.strictEqual(findNewUser.email, response.email);
  });

  console.log("Finalizaron las pruebas");
});
