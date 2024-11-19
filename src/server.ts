import express, { type Express } from "express";
import { categoriesRoutes, userRouter, productsRouter } from "./routes";

export const routerApi = (app: Express) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/categories", categoriesRoutes);
  router.use("/users", userRouter);
};
