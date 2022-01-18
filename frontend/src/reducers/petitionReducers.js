import {
  PETITION_LIST_REQUEST,
  PETITION_LIST_SUCCESS,
  PETITION_LIST_FAIL,
  PETITION_CREATE_FAIL,
  PETITION_CREATE_REQUEST,
  PETITION_CREATE_SUCCESS,
  PETITION_CREATE_RESET,
  PETITION_DELETE_FAIL,
  PETITION_DELETE_REQUEST,
  PETITION_DELETE_SUCCESS,
  PETITION_DETAILS_FAIL,
  PETITION_DETAILS_REQUEST,
  PETITION_DETAILS_SUCCESS,
  PETITION_UPDATE_REQUEST,
  PETITION_UPDATE_SUCCESS,
  PETITION_UPDATE_FAIL,
  PETITION_UPDATE_RESET,
  PETITION_DELETEALL_REQUEST,
  PETITION_DELETEALL_SUCCESS,
  PETITION_DELETEALL_FAIL,
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

export const petitionDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PETITION_DELETE_REQUEST:
      return { loading: true };
    case PETITION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PETITION_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const petitionDetailsReducer = (state = { petition: {} }, action) => {
  switch (action.type) {
    case PETITION_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PETITION_DETAILS_SUCCESS:
      return { loading: false, petition: action.payload };
    case PETITION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const petitionUpdateReducer = (state = { petition: {} }, action) => {
  switch (action.type) {
    case PETITION_UPDATE_REQUEST:
      return { loading: true };
    case PETITION_UPDATE_SUCCESS:
      return { loading: false, success: true, petition: action.payload };
    case PETITION_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PETITION_UPDATE_RESET:
      return { petition: {} };

    default:
      return state;
  }
};

export const deleteAllPetitionsReducer = (state = {}, action) => {
  switch (action.type) {
    case PETITION_DELETEALL_REQUEST:
      return { loading: true };
    case PETITION_DELETEALL_SUCCESS:
      return { loading: false, success: true };
    case PETITION_DELETEALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
