import axios from "axios";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "../actions/types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/posts");
    dispatch({
      type:GET_POSTS,
      payLoad: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
  }
};

export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/api/posts", formData);
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/posts${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
  }
};
