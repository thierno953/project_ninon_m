import {
  ADMIN_PIN_FAIL,
  ADMIN_PIN_REQUEST,
  ADMIN_PIN_SUCCESS,
  ALL_PIN_FAIL,
  ALL_PIN_REQUEST,
  ALL_PIN_SUCCESS,
  CLEAR_ERRORS,
  DELETE_PIN_FAIL,
  DELETE_PIN_REQUEST,
  DELETE_PIN_SUCCESS,
  NEW_PIN_FAIL,
  NEW_PIN_REQUEST,
  NEW_PIN_SUCCESS,
  PIN_DETAILS_FAIL,
  PIN_DETAILS_REQUEST,
  PIN_DETAILS_SUCCESS,
  UPDATE_PIN_FAIL,
  UPDATE_PIN_REQUEST,
  UPDATE_PIN_SUCCESS,
} from "../constants/pinConstant";
import axios from "axios";

// all pins
export const getPin = (currentPage = 1) => async (dispatch) => {
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

// Get pin Details
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

// Get All pins For Admin
export const getAdminPin = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PIN_REQUEST });

    const { data } = await axios.get("/api/admin/pins");

    dispatch({
      type: ADMIN_PIN_SUCCESS,
      payload: data.pins,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// create pins
export const createPin = (pinData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PIN_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`api/pin/new`, pinData, config);
    dispatch({ type: NEW_PIN_SUCCESS, payload: data, });
  } catch (error) {
    dispatch({
      type: NEW_PIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// update pin
export const updatePin = (id, pinData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PIN_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/admin/pin/${id}`,
      pinData, config
    );
    dispatch({
      type: UPDATE_PIN_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PIN_FAIL,
      payload: error.response.data.message,
    });
  }
}

// Delete pin
export const deletePin = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PIN_REQUEST });

    const { data } = await axios.delete(`/api/admin/pin/${id}`);

    dispatch({
      type: DELETE_PIN_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
