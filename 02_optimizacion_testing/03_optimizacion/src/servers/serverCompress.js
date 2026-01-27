import express from 'express';
import data from "../data.js";
import compression from 'express-compression';

const app = express();

// app.use(compression()); // GZIP aplico metodo de compresion a todas las rutas 
app.use(compression({brotli: {enabled: true, zlib: {}}})); // BROTLI

// en esta ruta devuelvo la data comprimida
/*
 SI SE QUIERE APLICAR A RUTA EN PARTICULAR, se aplica como middleware 
app.get('/gzip', compression, (req, res) => { 
    */
app.get('/gzip', (req, res) => {
    res.send(data);
});

export default app;
