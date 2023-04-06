import expressAsyncHandler from "express-async-handler";
import { Pizza } from "../models/pizzaModel";
import { nanoid } from "nanoid";

// Create new pizza
// POST /api/pizzas
export const createPizza = expressAsyncHandler(async (req, res) => {
  const { id, owner, pizzaName, ingredients, recipe } = req.body;

  if (!id || !owner || !pizzaName || !ingredients || !recipe) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if ID exists
  const idExists = await id.findOne({ id });
  if (idExists) {
    res.status(400);
    throw new Error(
      "Internal ID already exists - try again, you are extremely unlucky."
    );
  }

  let randomId = nanoid(12);

  // Create pizza
  const pizza = await Pizza.create({
    id: randomId,
    owner,
    pizzaName,
    ingredients,
    recipe,
  });

  if (pizza) {
    res.status(201).json({
      _id: pizza._id,
      id: pizza.id,
      pizzaName: pizza.pizzaName,
      ingredients: pizza.ingredients,
      recipe: pizza.recipe,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
