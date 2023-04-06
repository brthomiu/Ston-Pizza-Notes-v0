import expressAsyncHandler from "express-async-handler";
import { Pizza } from "../models/pizzaModel";

// Create new pizza
// POST /api/pizzas
export const createPizza = expressAsyncHandler(async (req, res) => {
  const {owner, pizzaName, ingredients, recipe } = req.body;

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
