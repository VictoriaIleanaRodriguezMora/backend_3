import dotenv from "dotenv"; // busca un archivo .env
dotenv.config();

const MI_MONGO_BDD = process.env.MONGO_URL;
const MI_PORT = process.env.PORT || 8080;

export { MI_MONGO_BDD, MI_PORT };
