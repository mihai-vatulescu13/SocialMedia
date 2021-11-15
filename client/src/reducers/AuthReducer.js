import { AUTH } from "../actions/types";

const initialState = {
  id:'',
  email: '',
  name:''
}

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return action.payload;
    default:
      return state;
  }
}
