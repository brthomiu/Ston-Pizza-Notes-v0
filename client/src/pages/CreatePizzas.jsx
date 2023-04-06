import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPizza } from "../features/pizza/pizzaSlice";
import Spinner from "../components/Spinner";

const CreatePizzas = () => {
  // Local state for pizza entry
  const [formData, setFormData] = useState({
    owner: "",
    pizzaName: "",
    ingredients: [],
    recipe: "",
  });

  const { pizzaName, ingredients, recipe } = formData;

  // Initialize dispatch
  const dispatch = useDispatch();

  // Global states from Redux store
  const { user, isLoading } = useSelector((state) => state.auth);
  // const { isLoading } = useSelector((state) => state.pizza);

  let userName = user.name

  // Function to handle form string input
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Dispatches login function with form input data
  // Throws error if passwords do not match
  const onSubmit = (e) => {
    e.preventDefault();

    const pizzaData = {
      owner: userName,
      pizzaName,
      ingredients: ingredients.split(/(?:,| )+/),
      recipe,
    };

    dispatch(createPizza(pizzaData));
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
              value={ingredients} // regex hurts my brain
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
