// Prueba manual
import { Tareas } from "./utils/tareas.js";
const tarea = new Tareas();
tarea.add("Sacar a pasear al perro");
tarea.add("Darle de comer al perro");
tarea.complete("Sacar a pasear al perro"); // Cambio a mano el estado
tarea.saveToFile();
console.log("Se guardó en el archivo");
// node app_2.js