import express from "express";

export const categoriesRoutes = express.Router();

categoriesRoutes.get("/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({ categoryId, productId });
});
