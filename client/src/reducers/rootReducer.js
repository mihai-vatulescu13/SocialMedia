import { INCREMENT, DECREMENT, SEND_NUMBER } from "../actions/types"

//this is a substate from the main Redux state(main app object)
const initialState = {
  counter: 0
}

//this reducer represents a function that by using an action modify this substate:
const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 }
    case DECREMENT:
      return { counter: state.counter - 1 }
    case SEND_NUMBER:
      return { counter: state.counter + action.payload }
    default: return state
  }
}

export { RootReducer }