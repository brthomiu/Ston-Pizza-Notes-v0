import express, { Request, Response } from "express";
import { createPizza } from "../controllers/pizzaController";

const router = express.Router();

router.post("/api/pizzas", createPizza);

router.get("/api/pizzas", (req: Request, res: Response) => {
  res.send("This is not the way to the pizza!!");
});

export default router;
