import express from "express";
import { createPizza, getPizzas } from "../controllers/pizzaController";

const router = express.Router();

router.post("/api/pizzas", createPizza);

router.get("/api/pizzas", getPizzas);

export default router;
