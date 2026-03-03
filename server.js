const express = require("express");
const path = require("path");

const app = express();

// 👇 ESTA LÍNEA ES LA IMPORTANTE
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});