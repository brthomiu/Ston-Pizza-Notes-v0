/* global console */
import Pizza from "../components/Pizza";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";

const ViewPizzas = () => {
  // Local state to store pizza data fetched from backend
  const [pizzaList, setPizzaList] = useState([]);

  // Initialize dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { pizza, isError, isLoading, message } = useSelector(
    (state) => state.pizza
  );

  //Hook to GET pizza data
  useEffect(() => {
    if (isError) {
      throw new Error("Error fetching pizza data.");
    }
    axios({
      method: "get",
      url: "http://localhost:8000/api/pizzas",
    })
      .then(function (response) {
        setPizzaList(response.data);
      })
      .catch((error) => {
        throw new Error(`Axios error:${error}`);
      });
  }, [pizza, navigate, isError, message, dispatch, pizzaList]);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        {pizzaList.map((pizza) => (
          <div>
            <Pizza
              owner={pizza.owner}
              pizzaName={pizza.pizzaName}
              ingredients={pizza.ingredients}
              recipe={pizza.recipe}
            />
          </div>
        ))}
      </>
    );
  }
};

export default ViewPizzas;
