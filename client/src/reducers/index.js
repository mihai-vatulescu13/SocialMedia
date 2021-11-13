import { combineReducers } from "redux";
import { registerReducer } from "./RegisterReducer";

//combine all reducers from the app:
export default combineReducers({
  registerReducer
})
