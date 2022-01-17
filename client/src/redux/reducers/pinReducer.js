import {
  ALL_PIN_FAIL,
  ALL_PIN_REQUEST,
  ALL_PIN_SUCCESS,
  CLEAR_ERRORS,
  PIN_DETAILS_FAIL,
  PIN_DETAILS_REQUEST,
  PIN_DETAILS_SUCCESS,
} from "../constants/pinConstant";

export const pinsReducer = (state = { pins: [] }, action) => {
  switch (action.type) {
    case ALL_PIN_REQUEST:
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

    case ALL_PIN_FAIL:
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

