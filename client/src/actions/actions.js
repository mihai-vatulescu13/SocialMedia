import { REGISTER } from "./types" //action type
import axios from "axios";

//NOTE: this file will keep all of the actions:

export const registerAction = (userProps) => async (dispatch) => {
  const { name, email, password } = userProps;
  console.log('register action');

  //do HTTP request:
  const { data } = await axios.post('/auth/register', {
    name, email, password
  })

  console.log('user data in action:', data);

  //return data to the reducer:
  dispatch({
    type: REGISTER,
    payload: data
  })
}