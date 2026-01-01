// Escalabilidad
// Clusterizar la app
// Docker

console.log(process.pid);

// Módulo nativo cluster que permite ejecutar el concepto de clusterizacion. Donde tengo un proceso primary y un conjunto de procesos trabajadores
import express from "express";
import cluster from "cluster";

// logica:
// si sos un proceso primario, indica en la consola que lo es. y forkea a un trabajador
// si sos un trabajador, entonces indicalo por consola 