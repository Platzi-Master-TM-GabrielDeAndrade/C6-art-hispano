import * as types from "./types";

// INCREMENT QUANTITY BY 1
export const incrementQuantity = () => { 
  return {
    type: types.INCREMENT 
  };
}

// DECREMENT QUANTITY BY 1
export const decrementQuantity = () => { 
  return {
    type: types.DECREMENT 
  }
}; 