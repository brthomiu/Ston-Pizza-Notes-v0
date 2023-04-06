import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPizza, reset } from "../features/pizza/pizzaSlice";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const CreatePizzas = () => {
  // Local state for pizza entry
  const [formData, setFormData] = useState({
    owner: "",
    pizzaName: "",
    ingredients: [],
    recipe: "",
  });

  const { pizzaName, ingredients, recipe } = formData;

  // Initialize dispatch and navigate
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Global states from Redux store
  const { user, isLoading } = useSelector((state) => state.auth);
  // const { isLoading } = useSelector((state) => state.pizza);

  // Set pizza owner to name of user
  let userName = user.name;

  // Function to handle form string input
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //Create New Pizza Function
  const createNewPizza = (pizzaData) => {
    dispatch(createPizza(pizzaData)); //Logs user out
    dispatch(reset()); //Resets state
    navigate("/viewpizzas"); //Navigates to view pizzas page
  };

  // Dispatches login function with form input data
  // Throws error if passwords do not match
  const onSubmit = (e) => {
    e.preventDefault();

    const pizzaData = {
      owner: userName,
      pizzaName,
      ingredients: ingredients.split(/(?:,| )+/), // regex hurts my brain - this splits by commas, spaces, and/or both.
      recipe,
    };

    dispatch(createNewPizza(pizzaData));
  };

  // Return the spinner if state is loading
  if (isLoading) {
    return <Spinner />;
  }

  // Otherwise return pizza creation section
  return (
    <div>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="pizzaName"
              className="form-control"
              id="pizzaName"
              name="pizzaName"
              value={pizzaName}
              placeholder="Name your recipe."
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="ingredients"
              className="form-control"
              id="ingredients"
              name="ingredients"
              value={ingredients}
              placeholder="Enter ingredients."
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="recipe"
              className="form-control"
              id="recipe"
              name="recipe"
              value={recipe}
              placeholder="Add your recipe."
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreatePizzas;
