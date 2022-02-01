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
  DELETE_PIN_RESET,
  DELETE_PIN_SUCCESS,
  NEW_PIN_FAIL,
  NEW_PIN_REQUEST,
  NEW_PIN_RESET,
  NEW_PIN_SUCCESS,
  PIN_DETAILS_FAIL,
  PIN_DETAILS_REQUEST,
  PIN_DETAILS_SUCCESS,
  UPDATE_PIN_FAIL,
  UPDATE_PIN_REQUEST,
  UPDATE_PIN_RESET,
  UPDATE_PIN_SUCCESS,
} from "../constants/pinConstant";

export const pinsReducer = (state = { pins: [] }, action) => {
  switch (action.type) {
    case ALL_PIN_REQUEST:
    case ADMIN_PIN_REQUEST:
      return {
        loading: true,
        pins: [],
      };
    case ALL_PIN_SUCCESS:
      return {
        loading: false,
        pins: action.payload.pins,
        pinsCount: action.payload.pinsCount,
        resultPerPage: action.payload.resultPerPage,
      };
    case ADMIN_PIN_SUCCESS:
      return {
        loading: false,
        pins: action.payload,
      };

    case ALL_PIN_FAIL:
    case ADMIN_PIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const pinDetailsReducer = (state = { pin: {} }, action) => {
  switch (action.type) {
    case PIN_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PIN_DETAILS_SUCCESS:
      return {
        loading: false,
        pin: action.payload,
      };
    case PIN_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newPinReducer = (state = { pin: {} }, action) => {
  switch (action.type) {
    case NEW_PIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_PIN_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        pin: action.payload.pin,
      };
    case NEW_PIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PIN_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PIN_REQUEST:
    case UPDATE_PIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_PIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_PIN_FAIL:
    case UPDATE_PIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PIN_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_PIN_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
