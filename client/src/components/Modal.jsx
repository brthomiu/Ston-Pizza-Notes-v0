/* global document */
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import "./styles.css";
import { useSelector } from "react-redux";

const Modal = (props) => {
  //State for delete confirmation dialog
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Global user state
  const { user } = useSelector((state) => state.auth)

  // Close modal function
  const closeModal = () => {
    props.setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // Delete confirmation
  const confirmDelete = () => {
    setShowConfirmation(true);
  };

  if (user.name !== props.owner) {
    return (
      <>
        <div className="modal--bg">
          <div className="modal--container">
            <span className="modal--title">
              <h1>{props.pizzaName}</h1>
            </span>
            <span className="modal--owner">
              <p>Made by:</p>
              <p className="modal--name">{props.owner}</p>
            </span>
            <span className="modal--row">
              <h2>Ingredients:</h2>
            </span>
            <span className="modal--ingredients">
              {props.ingredients.map((ingredient) => {
                return <p className="modal--ingredient">{ingredient}</p>;
              })}
            </span>
            <span className="modal--recipe">
              <p>{props.recipe}</p>
            </span>
            <span className="modal--buttons">
              <button onClick={() => closeModal()}>Close</button>

            </span>
          </div>
        </div>
      </>
    );
  } else {
    if (!showConfirmation) {
      return (
        <>
          <div className="modal--bg">
            <div className="modal--container">
              <span className="modal--title">
                <h1>{props.pizzaName}</h1>
              </span>
              <span className="modal--owner">
                <p>Made by:</p>
                <p className="modal--name">{props.owner}</p>
              </span>
              <span className="modal--row">
                <h2>Ingredients:</h2>
              </span>
              <span className="modal--ingredients">
                {props.ingredients.map((ingredient) => {
                  return <p className="modal--ingredient">{ingredient}</p>;
                })}
              </span>
              <span className="modal--recipe">
                <p>{props.recipe}</p>
              </span>
              <span className="modal--buttons">
                <button onClick={() => closeModal()}>Close</button>
                <button
                  className="deleteButton"
                  onClick={() => confirmDelete()}
                >
                  Delete Pizza
                </button>
              </span>
            </div>
          </div>
        </>
      );
    } else

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
            <span className="modal--owner">
              <h5>Made by:</h5>
              <h3>{props.owner}</h3>
            </span>
            <span className="modal--row">
              <h2>Ingredients:</h2>
            </span>
            <span className="modal--ingredients">
              {props.ingredients.map((ingredient) => {
                return <p className="modal--ingredient">{ingredient}</p>;
              })}
            </span>
            <span className="modal--recipe">
              <p>{props.recipe}</p>
            </span>
            <span className="modal--buttons">
              <button onClick={() => closeModal()}>Close</button>
              <button className="deleteButton" onClick={() => confirmDelete()}>
                Delete Pizza
              </button>
            </span>
          </div>
        </div>
      </>
    );
  }
};

export default Modal;
