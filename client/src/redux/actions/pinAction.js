import {
  ALL_PIN_FAIL,
  ALL_PIN_REQUEST,
  ALL_PIN_SUCCESS,
  CLEAR_ERRORS,
  PIN_DETAILS_FAIL,
  PIN_DETAILS_REQUEST,
  PIN_DETAILS_SUCCESS,
} from "../constants/pinConstant";
import axios from "axios";

export const getPin = (currentPage= 1) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PIN_REQUEST });

    let link = `/api/pins?&page=${currentPage}`;

    const { data } = await axios.get(link);

    dispatch({
      type: ALL_PIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Products Details
export const getPinDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PIN_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/pin/${id}`);

    dispatch({
      type: PIN_DETAILS_SUCCESS,
      payload: data.pin,
    });
  } catch (error) {
    dispatch({
      type: PIN_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
