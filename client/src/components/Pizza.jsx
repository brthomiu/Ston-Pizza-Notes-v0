const Pizza = (props) => {
  return (
    <div>
      <p>{props.owner}</p>
      <p>{props.pizzaName}</p>
      <p>{props.ingredients}</p>
      <p>{props.recipe}</p>
    </div>
  );
};

export default Pizza;
