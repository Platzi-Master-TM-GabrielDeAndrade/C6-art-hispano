import { combineReducers } from "redux";
import * as types from "./types";

// QUANTITY REDUCER
const quantityReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      if (state <= 0) {
        return state;
      } else {
        return state - 1;
      }
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  quantity: quantityReducer,
};

export default combineReducers(reducers)