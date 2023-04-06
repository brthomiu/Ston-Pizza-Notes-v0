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


// // Get pizzas - this is a mess that will be cleaned up once the corresponding backend stuff is finished
// const getPizzas = async (user) => {

//   const response = await axios.get(API_URL, user)

//   return response.data
// }

export default pizzaService;
