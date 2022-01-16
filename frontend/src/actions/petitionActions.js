import {
  PETITION_LIST_REQUEST,
  PETITION_LIST_SUCCESS,
  PETITION_LIST_FAIL,
  PETITION_CREATE_FAIL,
  PETITION_CREATE_REQUEST,
  PETITION_CREATE_SUCCESS,
} from "../constants/petitionConstants";
import axios from "axios";

export const listPetitions = () => async (dispatch) => {
  try {
    dispatch({ type: PETITION_LIST_REQUEST });
    const { data } = await axios.get(`/api/petitions`);

    dispatch({
      type: PETITION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PETITION_LIST_FAIL,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const createMyPetition = (petition) => async (dispatch) => {
  try {
    dispatch({
      type: PETITION_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`/api/petitions`, petition, config);
    dispatch({
      type: PETITION_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PETITION_CREATE_FAIL,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
