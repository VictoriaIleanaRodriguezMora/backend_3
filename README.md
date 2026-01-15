process es una variable global viva en nuestra aplicación, donde vamos a poder consultar un montón de detalles del proceso que está corriendo en la app

tambien sirve para controlar

al ser un objeto global, no se necesita importar ninguna librería, simplemente lo llamamos y lo utilizamos

// El id de proceso se puede obtener en Administrador de tareas > Servicios

nuestro proceso es muy breve, y no llega a visualizarse en el listado. pero allí figuran los procesos de node.

el sistema operativo le asigna un ID, es al que tenemos acceso por medio de process.pid

process.version = node -v

process.platform nose pq devuelve 32 si es de 64

memoryUsage uso de memoria referente al proceso

console.log(process.exit()); // terminar el proceso intencionalente
si lo levanto con nodemon, figura:

`[nodemon] clean exit`

nada despues de la línea del exit se ejecuta. porque node ejecuta línea por línea

se le puede pasar un codigo de salida
por defecto = 0, finaliza sin errores

si se le pasa un número, pinta error en la consola. se pueden usar los códigos de errores estandarizados

# Manejo de argumentos - pasaje de parametros al servidor

al correr la app con node .js, le podemos pasar valores par que antes de ejecutar, levantar el servidor lo tenga en cuenta par algo en particular

no tiene limite de argumentos que se le puede pasar,

esto se puede trabajar sin librerias, y con tambien, que lo hacen mas simple

process.argv ---> esta es la variable que contiene todos los argumentos que le pasemos por cli

por defecto, devuelve un array con 2 posiciones:
[
'C:\\Users\\27462901130\\AppData\\Roaming\\nvm\\v22.13.0\
\node.exe',
'C:\\Users\\27462901130\\Desktop\\virm\\backend_3\\argv.j
s'
]
el 1ero es donde está instalado el motor que está corriendo el programa en la pc: node
el 2do es la ubicacion del archivo donde se está ejecutando node, el directtorio del archivo

si yo le paso algo más en la ejecución, lo agrega como una posicion más del array, tomando los espacios como posiciones

node argv.js hola holaquetal
[
'C:\\Users\\27462901130\\AppData\\Roaming\\nvm\\v22.13.0\\node.exe'
,
'C:\\Users\\27462901130\\Desktop\\virm\\backend_3\\argv.js',
'hola',
'holaquetal'
]

algo útil es pasar el puerto, el entorno que quiero ejecutar.
los números se pasan cómo string

node argv.js 8080

const PORT = process.argv[2] || 8080;
de esta manera, si no le paso por cli valor, no da error

! se puede hacer un slice para limpiar las primeras 2 posiciones, y trabajar con la posicion 0

# Librería para procesamiento de argumentos - Commander

### npm i commander

con commander se le puede dar un flag a los parametros
commander.option("-p <port>", "port server", 8080)

puedo concatenar y agregar todos los que necesite

node 03-commander.js -p 8081 -m prod a b c d
`node 03-commander.js -p 8081 -m prod a b c d
error: unknown option '-m'`
node 03-commander.js -p 8081 -e prod a b c d

# ! en las version 7 en adelante de commander no se pueden enviar parametros sueltos

se debe agregar:
` 
commander
.argument('[args...]', 'argumentos no definidos')
.option ...
`

console.log(commander.opts()); // devuelve todos los comandos configurados en forma de objeto

// ⬆️ OUTPUT: { p: '8081', e: 'prod' }

console.log(commander.args); // los argumentos sueltos que le envío, porque puedo pasar argumentos sin flasgs que tenga configurado. sigo teniendo acceso a ellos en un array

// ⬆️ OUPUT: [ 's' ]

# Manejo de variables de entorno - Dotenv
`npm i dotenv`
variables externas a aplicacion, estan en el so, contenedor, donde se ejecuta la app 

dotenv me va a permitir definir en un archivo .env pueda tener mis variables de entorno y que cuando ejecute la aplicacion, dotenv las va a cargar en el objeto process.env 

dotenv busca el archivo .env y las carga en el objeto process.env

es  util para datos sensibles, para datos que cambian por ambiente 

en .gitignore > .env

por convencion en mayuscula y snake case

# Hasta diapositiva 33