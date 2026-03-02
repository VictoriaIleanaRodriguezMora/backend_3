// con ASSERT - nativo de node
import assert from "node:assert"; // a partir de node 18 importar así modulos nativos
import Users from "../dao/Users.dao.js";
import { expect } from "chai";
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

describe("Test unitarios del DAO de usuarios", () => {
  let UsersDao = null;
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

  it("Debería registrar un usuario", async () => {
    const obj = createUser();
    const response = await Users.save(obj);
    const users = await Users.get(); // lista de usuarios

    // ejecucion

    // verificacion
    //assert.ok verifica que la propiedad que le paso, exista
    //assert.fail verifica que la propiedad que le paso, NO exista
    assert.ok(response._id);
    assert.equal(response.first_name, obj.first_name);
    assert.equal(typeof response.first_name === "string", "string");

    assert.equal(response.last_name, obj.last_name);
    assert.equal(response.email, obj.email);
    assert.equal(response.password, obj.password);
    assert.equal(response.role, obj.role);

    assert.equal(users).to.have.length(1); // si no vacio cuando corro el test, y hay documentos en la bdd esto va a fallar, pq va a haber +1 documentos
  });

  it("Debería retornar todos los usuarios", async () => {
    const users = await Users.get(); // lista de usuarios
    assert.equal(Array.isArray(users), true); // pasado a assert de node
  });

  it("Debería encontrar un documento de usuarios por id", async () => {
    const obj = createUser();
    const response = await Users.save(obj);
    const responseId = response._id.toString(); // paso a string el id que acabo de registrar
    const findNewUser = Users.getOne({ _id: response._id }); // busco el documento que se acaba de registrar y lo busco
    const responseIdUserBdd = findNewUser._id.toString();

    expect(responseIdUserBdd).to.equal(responseId);
  });

  it("Debería encontrar un documento de usuarios por email", async () => {
    const obj = createUser();
    const response = await Users.save(obj);
    const responseEmail = response.email;
    const findNewUser = Users.getOne({ email: response.email }); // busco el documento que se acaba de registrar y lo busco
    const responseIdUserBdd = findNewUser.email;

    expect(responseIdUserBdd).to.equal(responseEmail);
  });
});

// // con ASSERT - nativo de node
// import assert from "node:assert";
// import Users from "../dao/Users.dao.js";
// import mongoose from "mongoose";
// import connectBdd from "../utils/bdd_connection.js";

// const createUser = () => {
//   return {
//     first_name: "Fulano",
//     last_name: "Apellido fulano",
//     email: "elemail@gmail.com",
//     password: "dskjglhk",
//     role: "user",
//   };
// };

// describe("Test unitarios del DAO de usuarios", () => {
//   before(async () => {
//     await connectBdd();

//     if (mongoose.connection.collections["users"]) {
//       await mongoose.connection.collections["users"].drop();
//     }

//     console.log("Se limpió la bdd");
//   });

//   after(() => {
//     console.log("Finalizaron las pruebas");
//   });

//   it("Debería registrar un usuario", async () => {
//     const obj = createUser();
//     const response = await Users.save(obj);
//     const users = await Users.get();

//     // Verificaciones

//     assert.ok(response._id); // existe _id

//     assert.strictEqual(response.first_name, obj.first_name);
//     assert.strictEqual(typeof response.first_name, "string");

//     assert.strictEqual(response.last_name, obj.last_name);
//     assert.strictEqual(response.email, obj.email);
//     assert.strictEqual(response.password, obj.password);
//     assert.strictEqual(response.role, obj.role);

//     // largo del array
//     assert.strictEqual(users.length, 1);
//   });

//   it("Debería retornar todos los usuarios", async () => {
//     const users = await Users.get();
//     assert.strictEqual(Array.isArray(users), true);
//   });

//   it("Debería encontrar un documento de usuarios por id", async () => {
//     const obj = createUser();
//     const response = await Users.save(obj);

//     const responseId = response._id.toString();

//     const findNewUser = await Users.getOne({ _id: response._id });

//     const responseIdUserBdd = findNewUser._id.toString();

//     assert.strictEqual(responseIdUserBdd, responseId);
//   });

//   it("Debería encontrar un documento de usuarios por email", async () => {
//     const obj = createUser();
//     const response = await Users.save(obj);

//     const responseEmail = response.email;

//     const findNewUser = await Users.getOne({ email: response.email });

//     const responseEmailUserBdd = findNewUser.email;

//     assert.strictEqual(responseEmailUserBdd, responseEmail);
//   });
// });
