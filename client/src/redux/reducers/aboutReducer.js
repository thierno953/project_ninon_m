import {
  ABOUT_DETAILS_FAIL,
  ABOUT_DETAILS_REQUEST,
  ABOUT_DETAILS_SUCCESS,
  ALL_ABOUT_FAIL,
  ALL_ABOUT_REQUEST,
  ALL_ABOUT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/aboutConstant";

export const aboutsReducer = (state = { abouts: [] }, action) => {
  switch (action.type) {
    case ALL_ABOUT_REQUEST:
      return {
        loading: true,
        abouts: [],
      };
    case ALL_ABOUT_SUCCESS:
      return {
        loading: false,
        abouts: action.payload.abouts,
      };
    case ALL_ABOUT_FAIL:
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

export const AboutDetailsReducer = (state = { about: {} }, action) => {
  switch (action.type) {
    case ABOUT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ABOUT_DETAILS_SUCCESS:
      return {
        loading: false,
        about: action.payload,
      };
    case ABOUT_DETAILS_FAIL:
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
