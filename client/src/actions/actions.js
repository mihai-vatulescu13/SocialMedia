import { AUTH } from './types'
import axios from "axios";

//NOTE: this file will keep all of the actions:

export const Auth = (userProps) => async (dispatch) => {
  const { name, email,city, password } = userProps;

  //do HTTP request:
  const { data } = name 
  ? 
  await axios.post('/auth/register', {name, email,city, password})
  : 
  await axios.post('/auth/login', {email, password})

  //return data to the reducer:
  dispatch({
    type: AUTH,
    payload: data
  })
}