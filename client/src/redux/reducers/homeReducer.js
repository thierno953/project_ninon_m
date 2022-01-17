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
  DELETE_HOME_RESET,
  DELETE_HOME_SUCCESS,
  HOME_DETAILS_FAIL,
  HOME_DETAILS_REQUEST,
  HOME_DETAILS_SUCCESS,
  NEW_HOME_FAIL,
  NEW_HOME_REQUEST,
  NEW_HOME_RESET,
  NEW_HOME_SUCCESS,
  UPDATE_HOME_FAIL,
  UPDATE_HOME_REQUEST,
  UPDATE_HOME_RESET,
  UPDATE_HOME_SUCCESS,
} from "../constants/homeConstant";

export const homesReducer = (state = { homes: [] }, action) => {
  switch (action.type) {
    case ALL_HOME_REQUEST:
    case ADMIN_HOME_REQUEST:
      return {
        loading: true,
        homes: [],
      };
    case ALL_HOME_SUCCESS:
      return {
        loading: false,
        homes: action.payload.homes,
      };

    case ADMIN_HOME_SUCCESS:
      return {
        loading: false,
        homes: action.payload,
      };

    case ALL_HOME_FAIL:
    case ADMIN_HOME_FAIL:
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

export const homeDetailsReducer = (state = { home: {} }, action) => {
  switch (action.type) {
    case HOME_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case HOME_DETAILS_SUCCESS:
      return {
        loading: false,
        home: action.payload,
      };
    case HOME_DETAILS_FAIL:
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

export const newHomeReducer = (state = { home: {} }, action) => {
  switch (action.type) {
    case NEW_HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_HOME_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        home: action.payload.home,
      };
    case NEW_HOME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_HOME_RESET:
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

export const homeReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_HOME_REQUEST:
    case UPDATE_HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_HOME_FAIL:
    case UPDATE_HOME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_HOME_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_HOME_RESET:
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
