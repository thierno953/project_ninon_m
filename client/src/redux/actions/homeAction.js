import {
    ADMIN_HOME_FAIL,
    ADMIN_HOME_REQUEST,
    ADMIN_HOME_SUCCESS,
    ALL_HOME_FAIL,
    ALL_HOME_REQUEST,
    ALL_HOME_SUCCESS,
    CLEAR_ERRORS,
    DELETE_HOME_FAIL,
    DELETE_HOME_REQUEST,
    DELETE_HOME_SUCCESS,
    HOME_DETAILS_FAIL,
    HOME_DETAILS_REQUEST,
    HOME_DETAILS_SUCCESS,
    NEW_HOME_FAIL,
    NEW_HOME_REQUEST,
    NEW_HOME_SUCCESS,
    UPDATE_HOME_FAIL,
    UPDATE_HOME_REQUEST,
    UPDATE_HOME_SUCCESS,
  } from "../constants/homeConstant";
  import axios from "axios";
  
  export const getHome = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_HOME_REQUEST });
  
      const { data } = await axios.get("api/homes");

  
      dispatch({
        type: ALL_HOME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_HOME_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // detail
  export const getHomeDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: HOME_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/home/${id}`);
  
      dispatch({
        type: HOME_DETAILS_SUCCESS,
        payload: data.home,
      });
    } catch (error) {
      dispatch({
        type: HOME_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Get All Products For Admin
  export const getAdminHome = () => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_HOME_REQUEST });
  
      const { data } = await axios.get("/api/admin/homes");
  
      dispatch({
        type: ADMIN_HOME_SUCCESS,
        payload: data.homes,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_HOME_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Create Product
  export const createHome = (homeData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_HOME_REQUEST });
  
      const config = {
        homes: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(`/api/admin/home`, homeData, config);
  
      dispatch({
        type: NEW_HOME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_HOME_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Delete Product
  export const deleteHome = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_HOME_REQUEST });
  
      const { data } = await axios.delete(`/api/admin/home/${id}`);
  
      dispatch({
        type: DELETE_HOME_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_HOME_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Update Product
  export const updateHome = (id, homeData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_HOME_REQUEST });
  
      const config = {
        homes: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(`/api/admin/home/${id}`, homeData, config);
  
      dispatch({
        type: UPDATE_HOME_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_HOME_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Clearing Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  