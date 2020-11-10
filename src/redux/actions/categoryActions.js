import axios from "axios";
import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from "../types/dataTypes";

export const fetchCategory = () => {
  return (dispatch) => {
    dispatch(fetchCategoryRequest());
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        const category = response.data;
        dispatch(fetchCategorySuccess(category));
      })
      .catch((error) => {
        dispatch(fetchCategoryFailure(error.message));
      });
  };
};

export const fetchCategoryRequest = () => {
  return {
    type: FETCH_CATEGORY_REQUEST,
  };
};

export const fetchCategorySuccess = (category) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: category,
  };
};

export const fetchCategoryFailure = (error) => {
  return {
    type: FETCH_CATEGORY_FAILURE,
    payload: error,
  };
};

