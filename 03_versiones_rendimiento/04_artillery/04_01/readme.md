RECUERDA COLOCAR TU URL DE MONGO ATLAS ANTES DE EJECUTAR ESTE PROYECTO

El comando a ejecutar en consola será:

```bash
artillery run config.yml --output testPerformance.json
```

Además, para poder ver el resultado en una gráfica, ejecutar el siguiente comando:
Éste leerá el archivo config.yml y realizará el testing correspondiente a los escenarios.

```bash
artillery report testPerformance.json -o testResults.html
```

Éste tomará el json correspondiente y procederá a generar un html para leer las estadísticas de manera más amigable.

## test.yml

Este archivo define la configuración de un test de carga.  
Las propiedades principales se declaran dentro de la sección `config`.

---

## Configuración general (`config`)

### target

Define el servidor contra el cual se ejecutarán las pruebas.

| Propiedad | Descripción           |
| --------- | --------------------- |
| target    | URL del servidor base |

---

### phases

Configura las fases del test de carga, indicando duración y cantidad de usuarios simulados.

| Propiedad   | Descripción                                                               |
| ----------- | ------------------------------------------------------------------------- |
| duration    | Duración de la fase (en segundos). Cada 5 segundos se generan solicitudes |
| arrivalRate | Cantidad de clientes que se crean por segundo                             |
| name        | Nombre descriptivo de la fase                                             |

---

### payload

Permite utilizar datos dinámicos obtenidos desde un archivo externo.

| Propiedad | Descripción                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| path      | Ruta al archivo que contiene una lista de IDs existentes en la base de datos |
| field     | Nombre del campo desde el cual se toman los IDs                              |

---

## scenarios

Define los escenarios que se ejecutarán durante el test.

| Propiedad | Descripción                  |
| --------- | ---------------------------- |
| name      | Nombre del escenario         |
| flow      | Flujo de acciones a ejecutar |

---

### flow

Describe paso a paso las acciones que ejecuta cada usuario virtual dentro del escenario.

| Propiedad | Descripción                                                           |
| --------- | --------------------------------------------------------------------- |
| get       | Endpoint a ejecutar (ejemplo: `/api/materials`)                       |
| think     | Tiempo de espera (en segundos) luego de ejecutar la request           |
| get       | Endpoint con parámetro dinámico (ejemplo: `/api/materials?id={{id}}`) |


```bash
artillery run config.yml --output test.json
```


Nota: El comando `artillery report` fue deprecado en versiones recientes de Artillery.
Actualmente la visualización de resultados se realiza mediante Artillery Cloud, lo cual
requiere una API Key. Para esta entrega se adjunta el archivo `test.json` generado por la
ejecución local del test de carga.
