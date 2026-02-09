const express = require("express");

const app = express();

app.get("/operacion-simple", (req, res) => {
  let sum = 0;

  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }

  res.json({
    sum,
    pid: process.pid,
  });
});

app.get("/operacion-compleja", (req, res) => {
  let sum = 0;

  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }

  res.json({
    sum,
    pid: process.pid,

  });
});

app.get("/", (req, res) => {
  res.send("Hola!");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`PID WORKER - ${process.pid}`);
  console.log(`Docker corriendo en el puerto ${PORT}`);

});
