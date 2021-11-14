import { LOGIN } from "../actions/types";

const initialState = {
  email: '',
  password: ''
}

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
}
