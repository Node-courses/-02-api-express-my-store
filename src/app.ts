import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola desde express");
});

app.listen(port, () => {
  console.log("Escuchando en el puerto", port);
});
