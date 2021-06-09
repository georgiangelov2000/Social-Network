import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
} from "./types";
import axios from "axios";

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const getProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/profile");
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/profile/user/${userId}`
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const createProfile = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/api/profile", formData);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const addExperience = (formData) => async (dispatch) => {
  try {
    const res = await axios.put(
      "http://localhost:5000/api/profile/experience",
      formData
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addEducation = (formData) => async (dispatch) => {
  try {
    const res = await axios.put(
      "http://localhost:5000/api/profile/education",
      formData
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/profile/experience/${id}`
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/profile/education/${id}`
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await axios.delete("http://localhost:5000/api/profile");

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
      });
    }
  }
};
