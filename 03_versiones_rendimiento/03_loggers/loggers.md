# Loggers
la idea es empezar a limpiar los console.log y reemplazarlos por un logger 

los console.log le restan rendimiento a la app, sobre todo en produccion, el .log es una funcion sincronica, se detiene ahí y hasta que no imprime lo que tiene que imprimir. entonces resta rendimiento

Los loggers son los registros de la actividad en la aplicación
Gracias a esto podemos ver si ocurrió un error, en que momento, donde. 

Además, el console.log no persiste, no se registra en ningún lado para poder ir a buscarlo luego. 

Al user una herramiento de loggeo, sí. Cada log se guarda en un archivo, para leer luego.

Si llega un error en producción, yo necesito tener la información de ese log, de cuando pasó, y todo eso. REGISTRADO. 

Puedo definir niveles de log, entonces puedo configurar niveles de importancia

# Winston logger




