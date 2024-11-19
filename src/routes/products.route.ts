import { faker } from "@faker-js/faker";
import express from "express";

export const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  const { size } = req.query;
  const limit = Number(size) || 10;
  const products = [];

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }

  res.status(200).json({
    limit,
    products,
  });
});

productsRouter.get("/filter", (req, res) => {
  res.status(200).send("Proximamente filtrando productos");
});

productsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  if (Number(id) === 999) {
    res.status(404).json({ message: "Producto no encontrado" });
  } else {
    res.status(200).json({
      id,
      name: `Product ${id}`,
      price: 1000,
    });
  }
});

productsRouter.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Producto creado",
    product: body,
  });
});

productsRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: "Producto actualizado",
    product: { id, ...body },
  });
});

productsRouter.patch("/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  res.status(200).json({
    message: "Producto actualizado parcialmente",
    product: { id, name },
  });
});

productsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Producto ${id} eliminado` });
});
