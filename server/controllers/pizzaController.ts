// @ts-nocheck 
const expressAsyncHandler = require("express-async-handler")
const Pizza = require("../models/pizzaModel")


// import expressAsyncHandler from "express-async-handler";
// import { Pizza } from "../models/pizzaModel";

// Create new pizza
// POST /api/pizzas
const createPizza = expressAsyncHandler(async (req, res) => {
  const { owner, pizzaName, ingredients, recipe } = req.body;

  if (!owner || !pizzaName || !ingredients || !recipe) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Create pizza
  const pizza = await Pizza.create({
    owner,
    pizzaName,
    ingredients,
    recipe,
  });

  if (pizza) {
    res.status(201).json({
      _id: pizza._id,
      owner: pizza.owner,
      pizzaName: pizza.pizzaName,
      ingredients: pizza.ingredients,
      recipe: pizza.recipe,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc     Get pizzas
//@route    GET /api/pizzas
//@access   Private
const getPizzas = expressAsyncHandler(async (req, res) => {
  const pizzas = await Pizza.find();

  res.status(200).json(pizzas);
});

//@desc     Delete pizza
//@route    DELETE /api/pizza/:id
//@access   Private
const deletePizza = expressAsyncHandler(async (req: any, res) => {
  const pizza: any = await Pizza.findById(req.params.id);

  if (!pizza) {
    res.status(400);
    throw new Error("Pizza not found");
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the goal user
  if (pizza.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Pizza.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = { createPizza, getPizzas, deletePizza}
// set functions back to export if you undo this