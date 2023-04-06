import axios from "axios";

const API_URL = "/api/pizzas/";

// Create pizza
const createPizza = async (pizzaData) => {
  const response = await axios.post(API_URL, pizzaData);

  return response.data;
};

const pizzaService = {
  createPizza,
};

export default pizzaService;
