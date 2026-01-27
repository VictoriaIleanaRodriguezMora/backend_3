# Optimización y Testing en Backend

[PPT Clase 02](https://docs.google.com/presentation/d/1WpkH0wrRcy5tx2b4959KHf0UGXZ6EAhhBvxfufUdxIc/edit?slide=id.g120b44b0dae_0_913#slide=id.g120b44b0dae_0_913)


se me asigna la tarea de crear una nueva funcionalidad, corregir algo, lo que sea
como me aseguro yo, de que lo hice, no rompe nada en produccion?

testeos

tengo que realizar pruebas, para ver si todo sigue funcionando ok, no sólo lo que yo hice

entonces, no es que tengo que realizar 1, 2, 3 pruebas. puedens er 200 pruebas para probar la app/producto entero. entonces no es optimo realizarlo manual esos tests. lo optimo seria tener tests desarrollados

despues está la profesión de tester qa, testea funcionamiento, flujo de la página/aplicación, ve si hay algún error 

nosotros testeamos el código con herramientas de testing

### Herramientas para testing en js
ambas librerias son para front y back, para testing automatico
- jest 
https://jestjs.io/
- mocha
https://mochajs.org/#:~:text=Mocha%20es%20un%20framework%20de,y%20agiliza%20las%20pruebas%20asincr%C3%B3nicas. 

### V18 en adelante de node hay herramientas de testing nativas 

### Jest archivo.spec.js
Es una buena practica ponerle al archivo .spec el mismo nombre que lo que voy a estar testeando

Con `describe` creamos un grupo de testing
Recibe 2 parametros: el título del test, y la fn callback con las pruebas (`it`) que va a ejecutar

`it`, recibe 2 parametros tambien: el título de lo que va a ejecutar, y la fn callback

- Dentro de `it`
    - Etapa de preparación: Se crean los valores que se van a ejecutar en la operación. Variables con los números
    - Etapa de ejecución: Llamo a la función a testear, con los valores que declaré en la etapa previa 
    - Etapa de verificación: `expect`

#### Jest - toThrow
cuando se espera que una fn devuelva un Throw new Error


#### Jest - configuracion
Se debe tener `"type": "module"` y la configuración del comando, debe tener la ruta correcta del archivo .spec `  "test:win": "node --experimental-vm-modules node_modules/jest/bin/jest.js ./test/calculadora.spec.js"`

#### Ignorar tests en PRD
depende de la decisión del equipo

### 2 grandes Estrategias de Testing

- Test unitario: Donde se testea un fragmento de código, una sola funcionalidad. 

Ej: Si tengo un controlador, que trae información de la bdd y la devuelve. En un test unitario los datos los tengo que simular, no van a ser los datos de la bdd. Porque estoy testeando la función. 

Ej: El servicio que busca los productos y los devuelve. El servicio se comunica con el DAO por ej, con el modelo de la bdd. En un test unitario, la conexión a la bdd no la voy a testear. Los datos los voy a mockear, simular 

Ej: T.U. en un controlador que guarda los usuarios

Ej: La comunicación con la bdd lo puedo probar en otro tipo de estrategia que se llama test de integración. Si quiero probar si guarda, cambia, es de integración

### Test de integración es donde se comunican todas las capas de la app. El endpoint completo

En lugar de probar un método en especifico, imaginemos que esa clase Calculadora era la Clase del DAO. En lugar de probar sólo el método del DAO que hace el getAll, pruebo el endpoint completo que tiene el controller que llama al servicio, el servicio llama al DAO, el DAO al modelo 

### Test funcional
Es + para el cliente, el flujo de la app de punta a punta sin dejar cabos sueltos 

## TDD Test Driven Development

Desarrollo dirigido por tests, es una estrategia de programación que consiste en escribir 1° los tests (gralmente unitarias) y despues escribir el código, que haga que esa prueba funcione. Por último refactorizar el código

Para esto es más que importante tener definido qué y cómo tiene que hacer la aplicación. 

# Desarrollo preventivo a partir de mocks 
Técnica de mock, datos "falsos" que utilizamos para hacer pruebas

Si quiero probar la funcionalidad que borre todos los datos de una bdd, no lo hago con una bdd real. Puedo tener una bdd de testing. 

### Caso de uso de mock
Crear un servidor, una api, con datos de prueba para consumir durante el desarrollo

### Faker-js - https://fakerjs.dev/
faker original cerró, y existe faker-js

```bash
npm i faker-ks/faker
```

### Mongoose schema
https://mongoosejs.com/docs/guide.html
