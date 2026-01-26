// node 02_optimizacion_testing/02_faker/src/server.js
import mongoose from 'mongoose'
import express from 'express';
import router from './src/routers/user.router.js'
import dotenv from 'dotenv';
dotenv.config()

const app = express();
const puerto = 8080;

// Config
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', router)

const server = app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:8080`);
});

async function connectMDB() {
  let URL
  try {
    URL = process.env.MONGO_URL

    if (!URL) throw new Error("Mongo URL no definida")

    console.log("BDD conectada correctamente.");
    await mongoose.connect(URL)

  } catch (e) {
    console.log(e)
  }
}

(async () => {
  await connectMDB()
})()


