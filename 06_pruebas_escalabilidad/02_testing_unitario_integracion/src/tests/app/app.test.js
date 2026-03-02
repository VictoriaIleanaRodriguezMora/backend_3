import app from "../../app";
import request from "supertest";
import mongoose from "mongoose";
// import {fakerES1 from  as faker}

const createUser = () => {
  return {
    first_name: "Fulano",
    last_name: "Apellido fulano",
    email: "elemail@gmail.com",
    password: "dskjglhk",
    role: "user",
  };
};

describe("Conjunto de pruebas de API Adoptme", () => {
  beforeAll(async () => {
    await connectBdd();
    await mongoose.connection.collections["users"].drop(); // para que las pruebas inicien con la coleccion limpia
    console.log("Se limpió la bdd");
  });

  test("[POST] /users", async () => {
    const user = createUser();
    // con el metodo request hago las peticiones como si fuera fetch
    const response = await request(app).post("/users").send(user);
    // console.log(response); // es un obj enorme
    console.log(response.body); // yo necesito nomas el body. me devuelve el documento que viene de la bdd
    const id = response.body._id;
    const first_nameResponse = response.body.first_name;
    const first_nameExpected = user.first_name;
    const statusCode = response.statusCode;
  });
});
