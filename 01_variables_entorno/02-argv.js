console.log(process.argv);
// [
//   'C:\\Users\\27462901130\\AppData\\Roaming\\nvm\\v22.13.0\
// \node.exe',
//   'C:\\Users\\27462901130\\Desktop\\virm\\backend_3\\argv.j
// s'
// ]
console.log(process.argv[2]);

const express = require("express");
const app = express();
const PORT = process.argv[2] || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
