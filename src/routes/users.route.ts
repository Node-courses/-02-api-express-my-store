import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  const { limit, offset } = req.query;
  if (!limit) {
    res.status(400).json({ message: "Falta el limite" });
    return;
  }

  if (!offset) {
    res.status(400).json({ message: "Falta el offset" });
    return;
  }

  res.status(200).json({ limit, offset });
});
