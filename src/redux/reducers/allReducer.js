import categoryReducer from "./categoryReducer";
import dataReducer from "./dataReducer";
import queryReducer from "./queryReducer";

import { combineReducers } from "redux";

const allReducer = combineReducers({
  categoryReducer: categoryReducer,
  dataReducer: dataReducer,
  queryReducer: queryReducer
});

export default allReducer;
