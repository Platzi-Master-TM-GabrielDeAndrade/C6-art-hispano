import * as types from "./types";

// INCREMENT QUANTITY BY 1
export  function incrementQuantity()  { 
  return {
    type: types.INCREMENT,
  };
};

// DECREMENT QUANTITY BY 1

export  function decrementQuantity()  { 
  return {
    type: types.DECREMENT 
  }
}; 