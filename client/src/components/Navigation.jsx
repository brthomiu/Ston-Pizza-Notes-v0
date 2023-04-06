import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
// import { useEffect } from "react";
// import Spinner from "../components/Spinner";

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

  // Global user state
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      //Returns navigation bar
      <div>
        <Link to="/">Login</Link>
        <Link to="/About">About</Link>
        <Link to="/Register">Register</Link>
        <button onClick={onLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      //Returns navigation bar
      <div>
        <Link to="/Home">Home</Link>
        <Link to="/CreatePizzas">Create Pizza</Link>
        <Link to="/ViewPizzas">View Pizzas</Link>
        <button onClick={onLogout}>Logout</button>
      </div>
    );
  }
};

export default Navigation;
