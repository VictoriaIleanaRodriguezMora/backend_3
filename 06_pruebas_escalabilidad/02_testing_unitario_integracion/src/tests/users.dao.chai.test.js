// con mocha ejecutamos los tests
// con chai realizamos las asserciones las comparaciones
// con ASSERT - nativo de node, o chai
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
    expect(response).to.have.property("_id"); // que la rta de la creación tenga la propiedad id. verifico que se insertó en la bdd
    expect(response.first_name).to.be.equal(obj.first_name);
    // expect(typeof response.title === "string").to.be.equal(true);
    expect(response.first_name).to.be.a("string");

    expect(response.last_name).to.be.equal(obj.last_name);
    expect(response.email).to.be.equal(obj.email);
    expect(response.password).to.be.equal(obj.password);
    expect(response.role).to.be.equal(obj.role);

    expect(users).to.have.length(1); // si no vacio cuando corro el test, y hay documentos en la bdd esto va a fallar, pq va a haber +1 documentos
  });

  it("Debería retornar todos los usuarios", async () => {
    const users = await Users.get(); // lista de usuarios
    expect(Array.isArray(users)).to.be.equal(true);
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
