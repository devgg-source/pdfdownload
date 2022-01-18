import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  petitionListReducer,
  petitionCreateReducer,
  petitionDeleteReducer,
  petitionDetailsReducer,
  petitionUpdateReducer,
  deleteAllPetitionsReducer,
} from "./reducers/petitionReducers";

const reducer = combineReducers({
  petitionList: petitionListReducer,
  createPetition: petitionCreateReducer,
  petitionDelete: petitionDeleteReducer,
  petitionDetails: petitionDetailsReducer,
  petitionUpdate: petitionUpdateReducer,
  petitionDeleteAll: deleteAllPetitionsReducer,
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
