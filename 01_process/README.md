process es una variable global viva en nuestra aplicación, donde vamos a poder consultar un montón de detalles del proceso que está corriendo en la app

tambien sirve para controlar

al ser un objeto global, no se necesita importar ninguna librería, simplemente lo llamamos y lo utilizamos

// El id de proceso se puede obtener en Administrador de tareas > Servicios

nuestro proceso es muy breve, y no llega a visualizarse en el listado. pero allí figuran los procesos de node.

el sistema operativo le asigna un ID, es al que tenemos acceso por medio de process.pid

process.version = node 01_process/-v

process.platform nose pq devuelve 32 si es de 64

memoryUsage uso de memoria referente al proceso

console.log(process.exit()); // terminar el proceso intencionalente
si lo levanto con nodemon, figura:

`[nodemon] clean exit`

nada despues de la línea del exit se ejecuta. porque node 01_process/ejecuta línea por línea

se le puede pasar un codigo de salida
por defecto = 0, finaliza sin errores

si se le pasa un número, pinta error en la consola. se pueden usar los códigos de errores estandarizados

# Manejo de argumentos - pasaje de parametros al servidor

al correr la app con node 01_process/.js, le podemos pasar valores par que antes de ejecutar, levantar el servidor lo tenga en cuenta par algo en particular

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

# Global & child process - 37
## Listeners - Método ON
permite poner al proceso principal (process) a la escucha de algun evento, para poder ejecutar alguna acción, en caso de que suceda algo

### hay 3 tipos de listeners
3 tipos de metodos que van a estar escuchando procesos 

beforeExit, exitEvent, uncaughtEsception


### beforeExit
se ejecuta, cuando node 01_process/no tiene más tareas para ejecutar

no se llama a este evento, si se mata el proceso con process.exit

por más que este líneas despues de la definicion de evento, no se ejecuta el beforeExit

### exit - cuando muere el proceso
con el process.exit(numero) le puedo pasar un numero y ese número le llega a la funcion por parametro 

### uncaughtException - errores no manejados

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/throw

https://fabiokounang.medium.com/differences-between-throw-and-throw-new-error-in-javascript-nodejs-569545e980a1

se desea conocer el error y gestionarlo . Es entonces cuando se genera un error.
.00
# child process 01:26
node se ejecuta en un sólo proceso, en un sólo hilo 
gracias al asincronismo, puede ir ejecutando tareas o acciones, que parecen ser en paralelo, pero són en un sólo hilo 

cuando node 01_process/se encuentra con una operación asincronica, la manda a ejecutar y sin esperar que termine, continua con la ejecución de traeas siguientes, por medio de 'la cola de eventos', va a recibir más adelante, eventos de que la funcion asincronica finalizó y va a retomar lo que tenia que hacer en esa operación asincronica 

utilizar más de un proceso, de un hilo en una app de node, es una de las mejores maneras de escalar la app, 

en caso de que lleguen mil solicitudes por segundo, un sólo proceso no se lo va a bancar, entonces ahi hay que empezar a preparar la aplicacion para el crecimiento,

el manejo de los procesos hijos es una técnica para aprovechar y hacer que la app escale

multiplicamos el proceso principal 
tener un jefe/patrón de la obra, que trae obreros a trabajar, y queda a cargo

### como hacer que el proceso principal haga trabajar a sus procesos hijos 

proceso hijo, es un proceso creado por el proceso padre y node 01_process/nos va a permitir crear esos procesos con varias funciones/metodos ![alt text](image.png)


### exec 01:30:00
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

child process es una libreria nativa de node, no se instala

la funcion exec lo que haces es abrir la terminal, ejecutar un comando y cerrar la terminal, y manda la respuesta a una funcion callback que está esperando la rta 

como 1° parametro recibe el comando a ejecutar, y como 2° parametro una callback, que recibe 3 argumentos
el 1° de esos argumentos, es 'err', si no se puede ejecutar 


### execFile 01:36:00
#### error Error: spawn EFTYPE
"Este tipo de archivo no se puede ejecutar", busca un ejecutable y encuentra un archivo estatico

### execFile() ejecuta programas compiled o binarios


- https://nodejs.org/api/child_process.html#child_processexecfilefile-args-options-callback
- https://nodejs.org/api/child_process.html

### spawn
la diferenncia con exec, es que la rta me la va a dar en cuotas 

puedo procesar + info, pero lo tengo que atajar como si fueran eventos 


```bash
find / # lista todos los archivos en la pc
find . # lista los archivos en el directorio
```

crea un proceso hijo, y que este haga el trabajo sucio
lo que permite es que el proceso principal no esté bloqueado y pueda estar haciendo otras cosas
lo que permite es usar al máximo la capacidad del hilo


### Recapitulación
- exec --> Crea un proceso aparte, para que ejecute un comando que yo le paso. el proceso hace lo suyo, y cuando termina me manda la data 
- execFile --> hace lo mismo, pero permite leer el comando desde un archivo externo 
! ambos daban error, al querer ejecutar una tarea grande, superaba el peso permitido
- spawn --> para evitar eso, devuelve la info en cuotas

### fork 
es como el spawn, en el sentido de que si quiero crear un proceso hijo, le digo; hace esta acción

### fork vs spawn
fork proporciona un medio de comunicacion para que el proceso padre se comunique con el hijo, y el hijo con el padre. es atraves de eventos

el index bloqueante, no tiene nada que no conozcamos 