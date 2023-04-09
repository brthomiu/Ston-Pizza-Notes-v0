// @ts-nocheck 
const express = require('express')
const user = require('./userRoutes')
const login = require('./loginRoutes')
const pizzas = require('./pizzaRoutes')
// import express from "express";
// import user from "./userRoutes";
// import login from "./loginRoutes";
// import pizzas from "./pizzaRoutes";

const router = express.Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use(user, login, pizzas);

module.exports = router
// export default router;
