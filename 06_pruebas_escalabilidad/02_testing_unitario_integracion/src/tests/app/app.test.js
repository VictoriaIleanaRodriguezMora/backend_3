import app from "../../app.js"
import request from "supertest";
import mongoose from "mongoose";
// import {fakerES1 from  as faker}
import connectBdd from "../../utils/bdd_connection.js";
let testUserId;
let testUser;
let authCookie;
const mockUser = () => ({
  first_name: "Victoria",
  last_name: "Rodriguez",
  email: `victoria${Date.now()}@test.com`, // para evitar error unique
  password: "123456"
});

const createPetMock = () => ({
  name: "Firulais",
  specie: "dog",
  birthDate: "2020-01-01"
});

describe("Conjunto de pruebas de API Adoptme", () => {
  beforeAll(async () => {
    await connectBdd();
    const collection = await mongoose.connection.collections["users"];// para que las pruebas inicien con la coleccion limpia
    if (collection) {
      await collection.drop();
    }
    console.log("Se limpió la bdd");
    // Crear usuario de prueba
    // Crear usuario de prueba y guardar su ID
    const userMock = mockUser();
    const res = await request(app)
      .post("/api/sessions/register")
      .send(userMock);

    testUserId = res.body.payload;
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("[GET] /api/users/:uid debe devolver un usuario por id", async () => {

    const response = await request(app)
      .get(`/api/users/${testUserId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body.payload._id).toBe(testUserId);
  });


  test("[POST] /api/pets debe crear una mascota correctamente", async () => {

    const petMock = createPetMock();

    const response = await request(app).post("/api/pets").send(petMock);

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success");

    const payload = response.body.payload;

    expect(payload).toHaveProperty("_id");
    expect(payload.name).toBe(petMock.name);
    expect(payload.specie).toBe(petMock.specie);

    // Validaciones del DTO
    expect(payload.image).toBe("");
    expect(payload.adopted).toBe(false);
  });

  // ===============================
  // REGISTER
  // ===============================
  test("[POST] /api/sessions/register debe registrar usuario", async () => {
    testUser = mockUser();

    const res = await request(app)
      .post("/api/sessions/register")
      .send(testUser);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("success");
    expect(res.body.payload).toBeDefined();
    expect(typeof res.body.payload).toBe("string");
  });

  test("No debe permitir registrar usuario duplicado", async () => {
    const res = await request(app)
      .post("/api/sessions/register")
      .send(testUser);

    expect(res.statusCode).toBe(400);
    expect(res.body.status).toBe("error");
  });

  test("No debe registrar si faltan campos", async () => {
    const res = await request(app)
      .post("/api/sessions/register")
      .send({ email: "test@test.com" });

    expect(res.statusCode).toBe(400);
  });

  // ===============================
  // LOGIN
  // ===============================
  test("[POST] /api/sessions/login debe loguear y devolver cookie", async () => {

    const res = await request(app)
      .post("/api/sessions/login")
      .send({
        email: testUser.email,
        password: testUser.password
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("success");

    // Extraer cookie
    const cookie = res.headers["set-cookie"][0];
    expect(cookie).toBeDefined();

    authCookie = cookie.split(";")[0];

    expect(authCookie.startsWith("coderCookie=")).toBe(true);
  });

  test("No debe loguear con password incorrecto", async () => {
    const res = await request(app)
      .post("/api/sessions/login")
      .send({
        email: testUser.email,
        password: "wrongPassword"
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.status).toBe("error");
  });

  test("No debe loguear usuario inexistente", async () => {
    const res = await request(app)
      .post("/api/sessions/login")
      .send({
        email: "noexiste@test.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(404);
    expect(res.body.status).toBe("error");
  });

  // ===============================
  // CURRENT (protegido)
  // ===============================
  test("[GET] /api/sessions/current debe devolver usuario desde cookie", async () => {

    const res = await request(app)
      .get("/api/sessions/current")
      .set("Cookie", authCookie);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("success");
    expect(res.body.payload.email).toBe(testUser.email);
  });
});
