import {
    
    FETCH_QUERY_SUCCESS,
    
  } from "../types/dataTypes";
  
  const initialState = {
    data: "",
    
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case FETCH_QUERY_SUCCESS:
        return {
          data: action.payload,   
        };
      
      default:
        return state;
    }
  };
  
  export default reducer;