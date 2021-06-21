import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  //REMOVE_COMMENT,
} from "../actions/types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/posts");
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
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
      payload: { msg: error.response.statusText, status: error.response.status }
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
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const addComment = (postId, formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:5000/api/posts/comment/${postId}`,
      formData
    );
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    dispatch(setAlert("Comment Added", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
