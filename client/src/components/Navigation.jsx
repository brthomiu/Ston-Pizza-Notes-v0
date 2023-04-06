import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

// Navigation bar component

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Logout function
  const onLogout = () => {
    dispatch(logout()); //Logs user out
    dispatch(reset()); //Resets state
    navigate("/"); //Navigates to login page
  };
  return (
    //Returns navigation bar
    <div>
      <Link to="/">Login</Link>
      <Link to="/About">About</Link>
      <Link to="/Register">Register</Link>
      <Link to="/CreatePizzas">Create Pizza</Link>
      <Link to="/ViewPizzas">View Pizzas</Link>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Navigation;
