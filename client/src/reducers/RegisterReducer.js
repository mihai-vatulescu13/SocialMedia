import { REGISTER } from "../actions/types";

const initialState = {
  name: '',
  email: '',
  password: ''
}

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      console.log('user data in reducer:', action.payload)
      return action.payload;
    default:
      return state;
  }
}
