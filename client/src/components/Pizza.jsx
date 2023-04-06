const Pizza = (props) => {
  return (
    <div>
      <p>{props.owner}</p>
      <p>{props.name}</p>
      <p>{props.recipe}</p>
    </div>
  );
};

export default Pizza;
