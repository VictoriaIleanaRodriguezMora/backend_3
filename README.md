[Clase 1 - Test y Mocks](https://docs.google.com/presentation/d/1D86TUECWKzFCGDcGUVH45wWNBrX7CCgcPtnUHxmwOgY/edit#slide=id.g120b44b0dae_0_1178)

### Errores en entorno productivo

| Tipo de error      | Descripción                                                                                                                                | Ejemplo                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| **De compilación** | "Mi código no compila", ocurre cuando un código no puede iniciarse debido a que el compilador encontró algún error antes de ejecutarlo.    | Tema importaciones/exportaciones erroneas o que no existen                                                         |
| **De ejecución**   | "Mi código explotó", ocurre cuando el código sí logra compilarse, pero a lo largo de su trabajo ocurre un error, usualmente no controlado. | Levanta, pero en alguna parte del camino, explota. Puedo ver los productos, pero si quiero ver el detalle explota. |
| **Lógicos**        | "Funciona, pero no funciona", ocurre cuando el código compila y se ejecuta correctamente, pero el resultado no es el esperado.             | Agrego F al carrito, despues A, y al rato otro F, si figuran 3 items distintos es porque está mal                  |

JS es un lenguaje INTERPRETADO, no compilado.

### TDD - Test Driven Development | (Desarrollo Orientado a Pruebas)
Es una metodología de desarrollo de software que consiste en pensar y escribir las pruebas que debe cumplir determinada funcion, incluso antes de escribirla.
 Consiste en pasar por 3 etapas: 

1. Escribir una prueba fallida

2. Hacer que la prueba pase

3. Refactorizar

Ejemplo: Función Suma










### Desarrollo preventivo a partir de mocks

00:43:00
