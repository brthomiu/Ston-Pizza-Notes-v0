// @ts-nocheck 
// import express from "express";
// import {
//   createPizza,
//   getPizzas,
//   deletePizza,
// } from "../controllers/pizzaController";
// import { protect } from "../middleware/loginMiddleware";

const express = require("express");
const {createPizza, getPizzas, deletePizza} = require("../controllers/pizzaController")

const router = express.Router();

router.post("/api/pizzas", createPizza);

router.get("/api/pizzas", getPizzas);

router.delete("/api/pizzas/:id", deletePizza);

module.exports = router
// export default router;
