# Contenedores con Docker - https://www.docker.com/

Docker es una plataforma que nos permite crear, probar e implementar aplicativos en unidades de software estandarizadas, llamada contenedores.

Con docker vamos a estandarizar, lograr, que nuestra aplicación funcione de la manera correcta, sin importar donde se corra.

Cuando creamos un contenedor en docker va a tener cargado todo lo que necesita para su correcto funcionamiento, con las versiones de node, de bdd.

Para garantizar que levantando ese contenedor en otra pc, va a levantar igual.

Esto se acerca mucho a la problematica que intenta resolver una máquina virtual. La máquina virtual es más pesada, lleva más procesos, cargar el S.O.

Cosas que con herramientas como docker, no son necesarias

La idea es ejecutar entornos que tengan unicamente las configuraciones para ejecutar la app y nada más. Eso se llama contenedor, esto es lo que permite docker

# Contenedor

Entorno de ejecución que va a tener las dependencias necesarias para que la app corra sin tener problemas de compatibilidad

Puede que nos toque compartir un archivo de docker para que alguien pueda levantar nuestra aplicación

# Pasos

(Habiendo instalado docker)

1. Dockerfile - Archivo de configuracion
   Estan todas las instrucciones para que docker genere una imagen del proyecto.

Este archivo está en nuestro proyecto con el que docker va a generar una imagen

Ej: Cómo hacer la imagen de un CD/DVD. Es una copia exacta

2. Acá estariamos haciendo la copia exacta de ) nuestro proyecto. Cuando tengo la imagen de mi proyecto. Puedo hacer, múltiples contenedores de mi proyecto.

3. Contenedor
   Ejecutamos el aplicativo desde el contenedor
   En el contenedor ejecutamos la imagen

Tengo la imagen, y a partir de esa imagen puedo levantar la cantidad de contenedores que necesito

Levanto un servidor dentro de docker con la imagen

# 4 ¿Qué es una imagen base?

Le tenemos que decir que la imagen de nuestro proyecto, la levante con un entorno de ejecución, node.

Esto es para indicarle a docker que a partir de node, levante nuestro proyecto.

Es nuestro `node server.js`, sólo que docker se maneja con imagenes, entonces tengo que decirle que a partir de la imagen de node versión tal, ejecute nuestro proyecto.

## A partir de la imagen, del entorno que le decimos que se ejecute. Una vez allí, todos los comandos disponibles normalmente en node, por ej. Se pueden especificar en DOCKER

! Debe ser la misma que tenemos en el proyecto, con la que iniciamos el proyecto para asegurar su funcionamiento.

```bash
FROM node:22.13.0
```

Así, a secas toma la última versión de node
```bash
FROM node
```

# Propiedades de configuración
- `WORKDIR /destino`: Carpeta que vamos a crear dentro de docker 
- `COPY archivo.txt archivo.js /destino`: Me permite copiar archivos de la carpeta donde estoy ejecutando el docker file y pegarlos en la carpeta que hayamos creado con **`WORKDIR`**. Copiamos archivos desde acá y los pegamos en docker. Se pueden pasar múltiples archivos, el último será el destino donde serán copiados esos archivos.
   - Así, o `./` en vez del `/destino`
Despues de tener los archivos en el destino, tenemos que ejecutar el proyecto, ¿Cómo configuramos eso en docker?
Este paso es el mismo que hacemos despues de clonarnos un repositorio: npm install
- `RUN npm install`: 
Despues de la instalación, quiero que tome todo el código de la aplicación
- `COPY . .`: Copia los archivos del directorio donde estamos ejecutando el dockerfile y lo pega en el `WORKDIR`
### .dockerignore
Misma funcionalidad que .gitignore
- `EXPOSE 4040`: Exponer un puerto para que corra la app
- `CMD` ["npm start"]: Es el comando que va a ejecutar la aplicación. La ejecución del comando final, que se va a ejecutar al momento de correr el servidor, desde docker
o tambien
- `CMD ["node", "./src/server.js"]`: Indico la ruta 

# Cuando tengo listo el dockerfile:
Este comando va a leer el archivo y va a comenzar con la construcción de la imagen de la aplicacion. Una vez que tenga la imagen del servidor va a necesitar un nombre

⬇️ El flag `-t` es -tag, para darle el nombre 
⬇️ el `.` del final, significa que el dockerfile que necesito que lea, es el que está en este directorio

```bash
docker build -t nombre .
```

A partir de acá hay 2 caminos para usar docker, por consola o el docker desktop

## Powershell
Devuelve una tabla listando las imagenes que hemos creado, y va a salir la de recien, con el nombre que le pusimos 
```bash
docker images 
```

En server-test va eso, o las ultimas 4 letras del id  
Despues, el puerto de la pc y el puerto al que apunta el contenedor
```bash
docker run -p 8085:7070 server-test 
```

## DockerDesktop

Botón Run > Desplegable Optional Setting
- Ports: xxxx/7070 el último no me lo deja modificar porque es el que toma de la imagen.
El primero es nuestro EL LOCAL, y el otro es el puerto en que DOCKER lo corre.   

## https://hub.docker.com/search?q=node

Me tira las imagenes disponibles para ejecutar el proyecto

Tomamos una imagen base, del entorno de node, para poder configurar nuestra aplicación.
Esta imagen base, ya existe. Se consume de algún lado, se descarga de un repositorio de imagenes de Docker, dockerhub.



## DockerHub - 40

# Orquestación de contenedores

## Lógica de clusterización para contenedores

## Balanceador de cargas

# Orquestación con kubernetes

## Minikube

# Entrega N°1 de proyecto final

01:24:00

- https://docs.docker.com/reference/dockerfile/#copy
- https://docs.docker.com/reference/dockerfile/#understand-how-cmd-and-entrypoint-interact
- https://docs.docker.com/reference/dockerfile/#cmd
- https://www.geeksforgeeks.org/devops/docker-copy-instruction/