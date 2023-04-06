import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const {user} = useSelector((state) => state.auth)
    const {isLoading, isError, message} = useSelector((state) => state.auth)
  
    useEffect(() => {
      if(isError) {
        // eslint-disable-next-line no-undef
        console.log(message);
      }
  
      if(!user) {
        navigate('/')
      }

    }, [user, navigate, isError, message, dispatch])
  
  
  
    if(isLoading) {
      return <Spinner />
    }

  return <div>Home</div>;
};

export default Home;
