import { combineReducers } from 'redux';
import { RootReducer } from './rootReducer';

export default combineReducers({
  countReducer: RootReducer
})