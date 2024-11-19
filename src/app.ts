import express from "express";
import { routerApi } from "./server";

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log("Escuchando en el puerto", port);
});
