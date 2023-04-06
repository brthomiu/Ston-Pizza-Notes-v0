import "./styles.css";

const Pizza = (props) => {
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
    </div>
  );
};

export default Pizza;
