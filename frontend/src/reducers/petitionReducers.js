import {
  PETITION_LIST_REQUEST,
  PETITION_LIST_SUCCESS,
  PETITION_LIST_FAIL,
  PETITION_CREATE_FAIL,
  PETITION_CREATE_REQUEST,
  PETITION_CREATE_SUCCESS,
  PETITION_CREATE_RESET,
} from "../constants/petitionConstants";

export const petitionListReducer = (state = { petitions: [] }, action) => {
  switch (action.type) {
    case PETITION_LIST_REQUEST:
      return { loading: true, petitions: [] };
    case PETITION_LIST_SUCCESS:
      return {
        loading: false,
        petitions: action.payload,
      };
    case PETITION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const petitionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PETITION_CREATE_REQUEST:
      return {
        loading: true,
      };
    case PETITION_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        petition: action.payload,
      };
    case PETITION_CREATE_RESET:
      return {};
    case PETITION_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
