import { combineReducers } from "redux";
import { registerReducer } from "./RegisterReducer";
import { LoginReducer } from "./LoginReducer";

//combine all reducers from the app:
export default combineReducers({
  registerReducer,
  LoginReducer
})
