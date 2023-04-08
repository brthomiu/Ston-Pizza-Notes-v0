/* global document */
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import "./styles.css";

const Modal = (props) => {
  //State for delete confirmation dialog
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Close modal function
  const closeModal = () => {
    props.setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // Delete confirmation
  const confirmDelete = () => {
    setShowConfirmation(true);
  };

  if (!showConfirmation) {
    return (
      <>
        <div className="modal--bg">
          <div className="modal--container">
            <span className="modal--title">
              <h1>{props.pizzaName}</h1>
            </span>
            <span className="modal--row">
              <h5>Recipe by:</h5>
              <h3>{props.owner}</h3>
            </span>
            <span className="modal--row">
              {" "}
              <h2>Ingredients:</h2>
            </span>
            <span className="modal--ingredients">
              {props.ingredients.map((ingredient) => {
                return <p className="pizza--ingredient">{ingredient}</p>;
              })}
            </span>
            <span className="modal--row">
              <p>{props.recipe}</p>
            </span>{" "}
            <button onClick={() => closeModal()}>Close</button>
            <button onClick={() => confirmDelete()}>Delete Pizza</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="modal--bg">
        <ConfirmDelete
          refresh={props.refresh}
          setRefresh={props.setRefresh}
          _id={props._id}
          deletePizza={props.deletePizza}
          setShowConfirmation={setShowConfirmation}
        />
        <div className="modal--container">
          <span className="modal--title">
            <h1>{props.pizzaName}</h1>
          </span>
          <span className="modal--row">
            <h5>Recipe by:</h5>
            <h3>{props.owner}</h3>
          </span>
          <span className="modal--row">
            {" "}
            <h2>Ingredients:</h2>
          </span>
          <span className="modal--ingredients">
            {props.ingredients.map((ingredient) => {
              return <p className="pizza--ingredient">{ingredient}</p>;
            })}
          </span>
          <span className="modal--row">
            <p>{props.recipe}</p>
          </span>{" "}
          <button onClick={() => closeModal()}>Close</button>
          <button onClick={() => confirmDelete()}>Delete Pizza</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
