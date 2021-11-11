import { combineReducers } from 'redux';
import { RootReducer } from './rootReducer';
import { registerReducer } from "./registerReducer";

export default combineReducers({
  countReducer: RootReducer,
  registerUser: registerReducer
})