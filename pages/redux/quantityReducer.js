// import {} from "./actions";
import * as types from "./types";

// const initialState = {
//   quantity: 1,
// };

const quantity = (state = 1, { type  }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      if (state <= 0) {
        return state;
      } else {
        return state - 1;
      }
    // case types.TOTAL:
    //   return state * price;
    default:
      return state;
  }

};

export default quantity;