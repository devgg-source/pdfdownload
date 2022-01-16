import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  petitionListReducer,
  petitionCreateReducer,
} from "./reducers/petitionReducers";

const reducer = combineReducers({
  petitionList: petitionListReducer,
  createPetition: petitionCreateReducer,
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
