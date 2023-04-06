import Pizza from "../components/Pizza";

const ViewPizzas = () => {
  return (
    <div>
      <Pizza
        id={"1"}
        owner={"chef"}
        name={"new pizza"}
        ingredients={["flour ", "tomatoes ", "cheese "]}
        recipe={"make the pizza"}
      />
    </div>
  );
};

export default ViewPizzas;
