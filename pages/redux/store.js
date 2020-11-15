import { createStore,  applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

// combineReducers;
  
export function generateStore() {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
