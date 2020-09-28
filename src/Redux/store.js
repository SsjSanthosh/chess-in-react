import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./reducer";

const initialState = {};

const store = createStore(
  combineReducers({ chess: reducer }),
  initialState,
  composeWithDevTools()
);

export default store;
