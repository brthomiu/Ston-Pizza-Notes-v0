/* global document */

import "./styles.css";

const Modal = (props) => {
  // Close modal function
  const closeModal = () => {
    props.setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
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
      </div>
    </div>
  );
};

export default Modal;
