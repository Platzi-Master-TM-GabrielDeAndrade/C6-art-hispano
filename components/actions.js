import * as types from "./types";

// INCREMENT QUANTITY BY 1
export const incrementQuantity = () => ({ type: types.INCREMENT });

// DECREMENT QUANTITY BY 1
export const decrementQuantity = () => ({ type: types.DECREMENT });