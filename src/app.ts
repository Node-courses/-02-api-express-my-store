import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola desde express");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("Esta es una nueva ruta");
});

app.get("/products", (req, res) => {
  res.json({
    name: "Product 1",
    price: 1000,
  });
});

app.listen(port, () => {
  console.log("Escuchando en el puerto", port);
});
