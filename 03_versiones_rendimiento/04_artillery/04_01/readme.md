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

target url del servidor

- phases
- payload - - fields es el "id"
- scenarios - name, nombre de la solicitud

|             | phases                             |
| ----------- | ---------------------------------- |
| duration    | que cada 5 segundos se van a crear |
| arrivalRate | 50 clientes                        |

|             | payload                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------- |
| path        | le digo que tome una lista de ids, existentes en la bdd de un archivo. yo escribi el archivo. |
| arrivalRate | 50 clientes                                                                                   |
