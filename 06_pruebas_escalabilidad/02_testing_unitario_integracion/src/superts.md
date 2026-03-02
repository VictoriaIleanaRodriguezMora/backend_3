# Test Suite - API Adoptme (Machete Explicativo)

## Qué es

Es un conjunto de tests de integración que prueban toda la API:

Rutas → Controllers → Servicios → Base de datos → Autenticación

Se usa:
- Jest (framework de testing)
- Supertest (simula peticiones HTTP)
- Mongoose (conexión a MongoDB)
- app (servidor Express)

---

# Funcionamiento General

Flujo que sigue cada test:

Test → Supertest → App (Express) → Ruta → Controller → Service → MongoDB → Respuesta

Supertest simula llamadas HTTP reales sin levantar el servidor en un puerto.

---

# beforeAll

Se ejecuta antes de todos los tests.

Hace 3 cosas:

1. Conecta la base de datos.
2. Limpia la colección "users".
3. Crea un usuario inicial de prueba.

Por qué:
Para que los tests arranquen con una base limpia y sean reproducibles.

---

# afterAll

Cierra la conexión de Mongoose.

Por qué:
Si no se cierra, Jest queda esperando procesos abiertos y el test no termina.

---

# Mocks

mockUser() y createPetMock() generan datos falsos.

El email usa Date.now() para evitar errores de "unique" en MongoDB.

Por qué:
Evita depender de datos reales y permite repetir el test sin fallos por duplicados.

---

# GET /api/users/:uid

Qué prueba:
Que se pueda obtener un usuario por ID.

Qué valida:
- Status 200
- status = "success"
- El _id devuelto coincide con el creado

Comunicación:
GET → Controller → Busca en MongoDB → Devuelve usuario

---

# POST /api/pets

Qué prueba:
Que se pueda crear una mascota.

Qué valida:
- Se crea con _id
- name y specie correctos
- image = ""
- adopted = false

Por qué:
Valida que el DTO esté asignando valores por defecto correctamente.

---

# REGISTER

POST /api/sessions/register

Flujo:
Request → Validación → Hash password → Guardar usuario → Respuesta

Testea:
- Registro correcto (200)
- Usuario duplicado (400)
- Faltan campos (400)

Por qué:
Valida reglas de negocio y restricciones de la base.

---

# LOGIN

POST /api/sessions/login

Flujo:
Busca usuario → Compara password → Genera JWT → Envía cookie

Valida:
- Login correcto (200)
- Devuelve cookie "coderCookie"
- Password incorrecto (400)
- Usuario inexistente (404)

La cookie se guarda en una variable para usar después.

---

# CURRENT (Ruta protegida)

GET /api/sessions/current

Se envía la cookie manualmente:

.set("Cookie", authCookie)

Flujo:
Cookie → Middleware auth → Verifica JWT → Extrae usuario → Devuelve datos

Valida:
- Status 200
- Email correcto

Por qué:
Comprueba que la autenticación con JWT funciona realmente.

---

# Cómo se comunica todo

1. Supertest envía request al app.
2. Express recibe la request.
3. La ruta llama al controller.
4. El controller usa servicios.
5. El servicio interactúa con MongoDB.
6. Se genera respuesta.
7. Si hay login, se genera JWT y cookie.
8. Middleware usa esa cookie en rutas protegidas.

---

# Qué tipo de test es

Es un test de integración.

No prueba funciones aisladas.
Prueba todo el flujo completo del backend funcionando junto.

---

# Idea clave para entrega

Este archivo garantiza que:

- La base de datos funciona
- Las rutas responden correctamente
- Las validaciones están activas
- La autenticación con JWT funciona
- Las rutas protegidas realmente están protegidas

Simula comportamiento real de un cliente consumiendo la API.