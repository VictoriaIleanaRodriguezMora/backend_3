// Esta es la configuración para un servidor local, cuando contrato un servicio en la nube, no existe esto.

// 1 proceso maestro por cada nucleo

const cluster = require("cluster");
const { cpus } = require("os"); // módulo nativo de node 'os'. Con método cpus, para conocer los procesadores de mi pc
const express = require("express");

const numCPUs = cpus().length;
// console.log(cpus());

// /*
// Si el proceso es el primario
if (cluster.isPrimary) {
  // devuelve true o false
  console.log(`NUMERO DE NUCLEOS ===> ${numCPUs}`);
  console.log(`PID MASTER ${process.pid}`);

  // por cada núcleo que tenga disponible, crea un proceso hijo
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); // crea una replica del proceso primario
  }

  // La 2° tarea del proceso primario es
  // Poder escuchar si exist un error en estos procesos hijos
  // Va a estar escuchando el evento 'exit', que ocurre cuando un proceso hijo o 'worker' se cae
  cluster.on("exit", (worker_pid, code) => {
    console.log(
      `Worker_pid ${worker_pid.process.pid} died with code ${code} at ${Date()}`,
    );
    // Si se cae, creo uno nuevo inmediatamente
    cluster.fork();
  });
} else {
  // Si no es un proceso primario. Va el "proyecto"
  const app = express();

  app.get("/operacion-simple", (req, res) => {
    let sum = 0;

    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }

    res.json({
      sum,
      pid: process.pid,
      isWorker: cluster.isWorker,
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
      isWorker: cluster.isWorker,
    });
  });

  app.get("/dead", (req, res) => {
    res.json({ msg: "OK" });
    console.log(`PID => ${process.pid} dead`);
    process.exit(0); // dar de baja un proceso, activa el evento cluster.on("exit")
  });

  app.get("/", (req, res) => {
    res.send("Hola!");
  });

  const PORT = 8080;

  app.listen(PORT, () => {
    console.log(`PID WORKER - ${process.pid} http://localhost:8080`);
  });
}
// */
