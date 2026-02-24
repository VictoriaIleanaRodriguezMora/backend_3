// app.js
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express"

import __dirname from "./utils/index.js";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";

const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect("mongodb+srv://FUSSI:fussi0117@cluster0.jmg0aoz.mongodb.net/test?retryWrites=true&w=majority")

try {
  await connection
} catch (error) {
  console.log(error);
}

// /*

// */

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Adoptme",
      description: "Documentación de la API para adopción de mascotas",
      version: "1.0.0",
    },
  },
  apis: ["./src/docs/**/*.yml"], // ruta a los archivos de documentación
};
const specs = swaggerJSDoc(swaggerOptions)
console.log(specs); // si paths no devuelve nada no está encontrando la carpeta docs

app.use("/apidocs/", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);



app.listen(PORT, () => {
  console.log(`Listening on ${PORT} \n http://localhost:${PORT} `);
});