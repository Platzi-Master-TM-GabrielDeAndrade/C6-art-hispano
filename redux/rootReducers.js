import { combineReducers } from "redux";
import  quantity  from "./quantityReducer";

const rootReducers = combineReducers({
  quantity,
});

export default rootReducers;