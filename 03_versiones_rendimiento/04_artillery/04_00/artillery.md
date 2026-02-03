# Artillery - Pruebas de estress

paquete de node que sirve para simular la concurrencia en un sitio

permite simular que pasa cuando ingresan 1000 usuarios a la vez, ver cómo se comporta la app. y se le puede decir al cliente hasta donde soporta esta app, con esta infraestructura/presupuesto, etc

### Esto es más tarea de devops

Está bueno conocer, la punta del iceberg de esto. Pero no es tarea del backender.

Para proyectos personales está bueno concoerlo, pero en un trabajo, debe haber alguien especializado

Puede ser que te pidan configurarlas, como vamos a hacer ahora, y si piden un reporte, va a ser pobre, porque hay especialistas en esto.

```bash
npm i -g artillery
```

# Usando artillery

Con nuestro proyecto de prueba, ejecutamos artillery

en una terminal tenemos levantado el servidor, y en la otra ejecutamos artillery

### --count (cantidad de usuarios ejecutando solicitudes)
### --count (cantidad de peticiones que ejecuta CADA CLIENTE)
### -o nombreArchivo.json (El nombre del archivo donde va a realizar el reporte en formato .json)


```bash
artillery quick --count 40 --num 50 "http://localhost:8080/operacion-simple" -o simple.json

artillery quick --count 40 --num 50 "http://localhost:8080/operacion-compleja" -o compleja.json
```
