import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED_SUCCESFULLY,
  USER_LOADED_ERROR,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async (dispatch) => {
  
  if(localStorage.token){
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get("http://localhost:5000/api/auth");
    dispatch({
      type: USER_LOADED_SUCCESFULLY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOADED_ERROR,
    });
  }
};

export const register =
  ({ username, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ username, email, password });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        body,
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser())
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
