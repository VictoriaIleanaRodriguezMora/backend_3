// node 03_child_process/02_execFile/02_execFile.js
import { execFile } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptPath = __dirname + "/leer.txt";

execFile(scriptPath, (err, stdout, stderr) => {
  // err --> el programa NO se pudo ejecutar
  if (err) {
    console.log(`Error => ${err.message}`);
    return;
  }

  // stderr --> el comando corrió, pero devolvió un error
  if (stderr) {
    console.log("STDERR:");
    console.log(stderr);
    return;
  }

  // Si todo salió bien
  console.log(stdout);
});
