import { REGISTER } from '../actions/types';

const initialState = {
  name: '',
  email: '',
  city: '',
  password: ''
}

//in redux each reducer update the mini state by receiving actions or receiving actions and payload:
export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      const { name, email, city, password } = action.payload;
      return { name, email, city, password }
    default:
      return state;
  }
}
