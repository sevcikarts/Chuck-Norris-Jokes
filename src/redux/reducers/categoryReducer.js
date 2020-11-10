import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from "../types/dataTypes";

const initialState = {
  loading: false,
  category: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        loading: false,
        category: action.payload,
        error: "",
      };
    case FETCH_CATEGORY_FAILURE:
      return {
        loading: false,
        category: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
