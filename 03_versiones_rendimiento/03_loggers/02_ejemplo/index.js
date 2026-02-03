const express = require("express");
const { logger } = require("./utils/logger.js");
const app = express();

app.get("/", (req, res) => {
  try {
    logger.error("error en el endpoint");
  } catch (error) {
    logger.error(error.message);
    throw new Error(error);
  }
});

app.listen(8080, () => logger.info("Server ok en http://localhost:8080"));
