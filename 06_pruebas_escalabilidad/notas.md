# Adoptme - Repository + DAO pattern con inyección de dependencia

# DTO (Data Transfer Object)

Es un objeto que define qué datos entran o salen de tu aplicación.

- No accede a la base.
- No guarda nada.
- No consulta nada.

Solo modela datos para transporte.

El modelo puede tener password del cliente, pero cuando respondo al cliente NO quiero mandar el password.

El DTO limpia y adapta datos.
DTO = qué datos dejo pasar y en qué formato

# DAO (Data Access Object) - habla directamente con la base de datos.

En `dao/Users.dao.js` uso mongoose

Es el CRUD a la bdd

- No tiene lógica de negocio.
- No decide reglas.
- Solo ejecuta queries.

DAO = “el que ejecuta consultas en Mongo”

# Repository - capa intermedia entre Servicio y DAO

Tengo una clase `GenericRepository.js`, de la que las demas extienden.

Repository NO evita que el DAO toque la bdd.
Lo que hace es evitar que el RESTO del sistema sepa qué tipo de base estoy usando. El sistema usa los métodos que yo pongo en el Repository. Entonces si cambia la bdd, yo tengo que cambiar el DAO, pero nada más. No tengo que cambiar nada del sistema. Porque el sistema habla con el repository.

Es repository quien se comunica con el DAO

El repository no sabe si:
dao usa Mongo
o FileSystem
o memoria
o MySQL
o una API externa
Solo sabe que existe un método `getBy`, definido por mí. En el DAO

💡Entonces la abstracción es esta:

Mi controller NO sabe que existe Mongo.
Mi service NO sabe que existe Mongo.
Ellos solo saben que existe:
`usersService.getUserByEmail(email)`

> El DAO define cómo se guarda.
> El Repository define qué operaciones existen para el dominio.

Ej:
Supongamos que mañana cambiamos Mongo por FileSystem.

Antes:

````js
const usersService = new UserRepository(new UsersMongoDAO());
Des```pués:
```js
const usersService = new UserRepository(new UsersFileDAO());
````

No cambié controller, ni service, ni repository
Solo cambié el DAO.

Esa es la abstracción.

# Flujo de Adoptme

Request:
ROUTER
↓
CONTROLLER
↓
SERVICE (si existe lógica real)
↓
REPOSITORY
↓
DAO
↓
MODEL (Mongoose)
↓
MongoDB

> En este proyecto, el “SERVICE” en realidad es el Repository instanciado.

MongoDB
↓
MODEL
↓
DAO
↓
REPOSITORY
↓
SERVICE (aplica lógica si existe)
↓
CONTROLLER (arma la respuesta y aplica DTO)
↓
Response al cliente

❗ El DTO normalmente se usa en: Controller o service. Pero nunca en el DAO
