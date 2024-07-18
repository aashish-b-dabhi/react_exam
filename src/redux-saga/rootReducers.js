import { combineReducers } from "redux";
import recipeReducer from "./admin/reducer";

let rootReducers = combineReducers({
  recipeReducer,
});

export default rootReducers;
