// app.js
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";

const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(`URL DE MONGO`);

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://FUSSI:fussi0117@cluster0.jmg0aoz.mongodb.net/test?retryWrites=true&w=majority",
    );
    console.log("Conectado a MongoDB");

    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
    process.exit(1);
  }
};

startServer();
