import { createStore, applyMiddleware } from "redux";

// give you absolute control over your Redux store
// allows us to check the state at any time
// to send actions directly to the store
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
const initialState = {};

// allows  asynchronous use of the dispatch method
// gives the necessary time to the reducers to process the action
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
