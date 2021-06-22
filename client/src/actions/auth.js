import axios from "axios";
import {setAlert} from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  CLEAR_PROFILE
} from "./types";
import setAuthToken from "../utils/setAuthToken";

export const logout = () => dispatch => {
  dispatch({type:CLEAR_PROFILE});
  dispatch({type:LOGOUT});
}

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:5000/api/auth");
    dispatch({
      type: USER_LOADED_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const register =({ username, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ username, email, password });

    try {
      const res = await axios.post("http://localhost:5000/api/users/register",
        body,
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (error) {

      const errors=error.response.data.errors;
      if(errors){
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({
        type: REGISTER_FAIL,
      });

    }
  };

export const login = (email,password) => async (dispatch) => {
  const body={email,password}
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login",body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {

    const errors=error.response.data.errors;
    if(errors){
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_ERROR,
    });

  }
};
