import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { newPinReducer, pinDetailsReducer, pinsReducer, productReducer } from "./redux/reducers/pinReducer";
import {
  homeDetailsReducer,
  homeReducer,
  homesReducer,
  newHomeReducer,
} from "./redux/reducers/homeReducer";
import {
  AboutDetailsReducer,
  aboutsReducer,
} from "./redux/reducers/aboutReducer";
import { userReducer } from "./redux/reducers/userReducer";

const reducer = combineReducers({
  homes: homesReducer,
  newHome: newHomeReducer,
  home: homeReducer,
  homeDetail: homeDetailsReducer,

  abouts: aboutsReducer,
  aboutDetail: AboutDetailsReducer,

  pins: pinsReducer,
  pinDetails: pinDetailsReducer,
  pin: productReducer,
  newPin: newPinReducer,

  user: userReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
