
import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("http://localhost:5010/tweets/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const logoutCall = async(dispatch,navigate) =>{
  dispatch({type: "LOGOUT"});
  navigate("/login");
};

