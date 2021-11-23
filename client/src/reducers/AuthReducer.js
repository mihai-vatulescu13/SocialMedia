import { AUTH } from '../actions/types';

const initialState = {
  _id: 'default',
  name: 'default',
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return action.payload;
    default:
      return state;
  }
};
