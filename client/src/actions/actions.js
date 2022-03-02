import { AUTH } from './types';
import axios from 'axios';

export const Auth = (userProps) => async (dispatch) => {
  const { name, email, password } = userProps;

  //do HTTP request:
  const { data } = name
    ? await axios.post('/auth/register', { name, email, password })
    : await axios.post('/auth/login', { email, password });

  //return data to the reducer:
  dispatch({
    type: AUTH,
    payload: data,
  });
};
