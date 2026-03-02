import mongoose from "mongoose";
import { MI_MONGO_BDD, MI_PORT } from "../infra/config.js";

const connectBdd = async () => {
  try {
    await mongoose.connect(MI_MONGO_BDD);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
    process.exit(1);
  }
};
export default connectBdd;
