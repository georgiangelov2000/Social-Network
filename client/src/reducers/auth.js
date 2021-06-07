import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED_SUCCESFULLY,
  USER_LOADED_ERROR,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthencated: null,
  user: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthencated: true,
      };

    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthencated: false,
      };

    case USER_LOADED_SUCCESFULLY:
      return {
        ...state,
        isAuthencated: true,
        user: payload,
      };

    case USER_LOADED_ERROR:
      return {
        ...state,
        token:null,
        isAuthencated:false,
        user:null
      };

    default:
      return state;
  }
}
