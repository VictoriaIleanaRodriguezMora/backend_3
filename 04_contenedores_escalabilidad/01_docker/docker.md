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

Así, a secas toma la última versión de node
```bash
FROM node
```

## https://hub.docker.com/search?q=node

Me tira las imagenes disponibles para ejecutar el proyecto

## DockerHub - 40

# Orquestación de contenedores

## Lógica de clusterización para contenedores

## Balanceador de cargas

# Orquestación con kubernetes

## Minikube

# Entrega N°1 de proyecto final

01:22:00
