import {
  PETITION_LIST_REQUEST,
  PETITION_LIST_SUCCESS,
  PETITION_LIST_FAIL,
  PETITION_CREATE_FAIL,
  PETITION_CREATE_REQUEST,
  PETITION_CREATE_SUCCESS,
  PETITION_DELETE_REQUEST,
  PETITION_DELETE_SUCCESS,
  PETITION_DELETE_FAIL,
  PETITION_DETAILS_FAIL,
  PETITION_DETAILS_REQUEST,
  PETITION_DETAILS_SUCCESS,
  PETITION_UPDATE_REQUEST,
  PETITION_UPDATE_FAIL,
  PETITION_UPDATE_SUCCESS,
  PETITION_DELETEALL_REQUEST,
  PETITION_DELETEALL_SUCCESS,
  PETITION_DELETEALL_FAIL,
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

export const deletePetition = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PETITION_DELETE_REQUEST,
    });

    await axios.delete(`/api/petitions/${id}`);
    dispatch({
      type: PETITION_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PETITION_DELETE_FAIL,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getPetitionDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PETITION_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/petitions/${id}`, config);
    dispatch({
      type: PETITION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PETITION_DETAILS_FAIL,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updatePetition = (petition) => async (dispatch) => {
  try {
    dispatch({
      type: PETITION_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/petitions/${petition._id}`,
      petition,
      config
    );
    dispatch({
      type: PETITION_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PETITION_UPDATE_FAIL,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const deleteAllPetitions = () => async (dispatch) => {
  try {
    dispatch({
      type: PETITION_DELETEALL_REQUEST,
    });
    await axios.post("/api/petitions/deleteAll");
    dispatch({
      type: PETITION_DELETEALL_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PETITION_DELETEALL_FAIL,
    });
  }
};
