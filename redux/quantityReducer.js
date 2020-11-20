import * as types from "./types";

const quantity = (state = 1, { type }) => {
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

export default quantity;