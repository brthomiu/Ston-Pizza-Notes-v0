import "./styles.css";

const ConfirmDelete = (props) => {
  return (
    <div className="confirmDelete--container">
        <div className="confirmDelete--content">
        <h2>Are you sure you want to delete this pizza?</h2>
        <h3>Deleted pizzas cannot be retrieved.</h3>

      {" "}
      <button
        onClick={() =>
          props.deletePizza(props._id, props.refresh, props.setRefresh)
        }
      >
        Delete
      </button>
      <button onClick={() => props.setShowConfirmation(false)}>Back</button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
