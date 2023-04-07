/* global document */

import "./styles.css";
import axios from "axios";
import Modal from "./Modal";
import { useState } from "react";

const Pizza = (props) => {
  // State for modal
  const [modalOpen, setModalOpen] = useState(false);

  // Open modal function

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

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
      });
  };

  if (!modalOpen) {
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
        <button onClick={() => openModal()}>Show More</button>
        <button
          onClick={() =>
            deletePizza(props._id, props.refresh, props.setRefresh)
          }
        >
          Delete Pizza
        </button>
      </div>
    );
  } else {
    return (
      <>
        <Modal
          pizzaName={props.pizzaName}
          owner={props.owner}
          ingredients={props.ingredients}
          recipe={props.recipe}
          setModalOpen={setModalOpen}
        />
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
          <button onClick={() => openModal()}>Show More</button>
          <button
            onClick={() =>
              deletePizza(props._id, props.refresh, props.setRefresh)
            }
          >
            Delete Pizza
          </button>
        </div>
      </>
    );
  }
};

export default Pizza;
