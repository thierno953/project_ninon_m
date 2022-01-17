import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { pinDetailsReducer, pinsReducer } from "./redux/reducers/pinReducer";
import {
  homeDetailsReducer,
  homeReducer,
  homesReducer,
  newHomeReducer,
} from "./redux/reducers/homeReducer";

const reducer = combineReducers({
  homes: homesReducer,
  newHome: newHomeReducer,
  home: homeReducer,
  homeDetail: homeDetailsReducer,

  pins: pinsReducer,
  pinDetails: pinDetailsReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
