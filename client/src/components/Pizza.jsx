import "./styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pizza = (props) => {
  const navigate = useNavigate();

  // Pizza deletion function
  const deletePizza = (pizzaId, refresh, setRefresh) => {
    axios({
      method: "DELETE",
      url: `http://localhost:8000/api/pizzas/${pizzaId}`,
    })
      .catch((error) => {
        throw new Error(`Axios error:${error}`);
      })
      .then(() => {
        if (!refresh) {
          setRefresh(true);
        } else {
          setRefresh(false);
        }
        navigate("/ViewPizzas");
      });
  };

  return (
    <div className="pizza">
      <span className="pizza--title">
        <h1>{props.pizzaName}</h1>
      </span>
      <span className="pizza--row">
        <h5>Recipe by:</h5>
        <h3>{props.owner}</h3>
      </span>
      <span className="pizza--row">
        {" "}
        <h2>Ingredients:</h2>
      </span>
      <span className="pizza--ingredients">
        {props.ingredients.map((ingredient) => {
          return <p className="pizza--ingredient">{ingredient}</p>;
        })}
      </span>
      <span className="pizza--row">
        <p>{props.recipe}</p>
      </span>
      <button
        onClick={() => deletePizza(props._id, props.refresh, props.setRefresh)}
      >
        Delete Pizza
      </button>
    </div>
  );
};

export default Pizza;
