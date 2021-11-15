// import { REGISTER } from "./types" //action type
// import { LOGIN } from "./types";
import { AUTH } from './types'
import axios from "axios";

//NOTE: this file will keep all of the actions:

// export const registerAction = (userProps) => async (dispatch) => {
//   const { name, email, password } = userProps;

//   //do HTTP request:
//   const { data } = await axios.post('/auth/register', {
//     name, email, password
//   })

//   //return data to the reducer:
//   dispatch({
//     type: REGISTER,
//     payload: data
//   })
// }

// export const loginAction = (userProps) => async (dispatch) => {
//   //receive user props from the UI component:
//   const { email, password } = userProps;

//   //do http POST request to grab the user from databse by his email:
//   const { data } = await axios.post('/auth/login', {
//     email, password
//   });
//   console.log(data)

//   dispatch({
//     type: LOGIN,
//     payload: data
//   })
// }

export const Auth = (userProps) => async (dispatch) => {
  const { name, email, password } = userProps;

  //do HTTP request:
  const { data } = name 
  ? 
  await axios.post('/auth/register', {name, email, password})
  : 
  await axios.post('/auth/login', {email, password})

  //return data to the reducer:
  dispatch({
    type: AUTH,
    payload: data
  })
}