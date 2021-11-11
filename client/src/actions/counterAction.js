import { INCREMENT, DECREMENT, SEND_NUMBER } from "./types";

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