// node 02_optimizacion_testing/03_optimizacion/src/server.js

import serverCompress from './servers/serverCompress.js';
import serverNormal from './servers/serverNormal.js';

serverNormal.listen(3000, () =>
    console.log('Servidor Normal escuchando en http://localhost:3000')
);

serverCompress.listen(4000, () =>
    console.log('Servidor Compress escuchando en http://localhost:4000/gzip')
);
