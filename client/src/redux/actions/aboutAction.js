import {
  ABOUT_DETAILS_FAIL,
  ABOUT_DETAILS_REQUEST,
  ABOUT_DETAILS_SUCCESS,
  ALL_ABOUT_FAIL,
  ALL_ABOUT_REQUEST,
  ALL_ABOUT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/aboutConstant";
import axios from "axios";

export const getAbout = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ABOUT_REQUEST });
    const { data } = await axios.get("/api/abouts");

    dispatch({ type: ALL_ABOUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_ABOUT_FAIL, payload: error.response.data.message });
  }
};

export const getAboutDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: ABOUT_DETAILS_REQUEST});

    const { data } = await axios.get(`/api/about/${id}`);
 
    dispatch({
      type: ABOUT_DETAILS_SUCCESS,
      payload: data.about
    })
  } catch (error) {
   dispatch({
     type: ABOUT_DETAILS_FAIL,
     payload: error.response.data.message
   });
  }
}

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

