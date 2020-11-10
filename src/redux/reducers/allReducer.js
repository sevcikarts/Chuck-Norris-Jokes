import categoryReducer from "./categoryReducer";
import dataReducer from "./dataReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  categoryReducer: categoryReducer,
  dataReducer: dataReducer,
});

export default allReducer;
