import { INCREMENT, DECREMENT, SEND_NUMBER, REGISTER } from "./types";
import axios from 'axios';

export const incrementAction = () => {
  return {
    type: INCREMENT
  }
}

export const decrementAction = () => {
  return {
    type: DECREMENT
  }
}

export const sendNumber = (number) => {
  return {
    type: SEND_NUMBER,
    payload: number
  }
}

//an action may execute something like a fetch request and export action type and payload to the reducer:
export const setRegister = (userPorps) => async (dispatch) => {
  const { name, email, city, password } = userPorps;

  console.log('user data in action:', userPorps);

  //redux thunk allow us to use an composed action:
  const response = await axios.post('http://localhost:5000/api/auth/register', {
    name, email, city, password
  })

  dispatch({
    type: REGISTER,
    payload: response.data
  })
}