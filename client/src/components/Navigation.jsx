import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      <Link to="/">Login</Link>
      <Link to="/About">About</Link>
      <Link to="/Register">Register</Link>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Navigation;
