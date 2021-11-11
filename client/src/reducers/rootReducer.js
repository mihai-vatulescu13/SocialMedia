import { counter } from "../actions/types"

//this is a substate from the main Redux state(main app object)
const initialState = {
  counter: 0
}

//this reducer represents a function that by using an action modify this substate:
function rootReducer(state = initialState, action) {
  console.log(state, action)
  switch (action.type) {
    case counter:
      return state
    case "DECREMENT":
      return { counter: state.counter - 1 }
    default: return state
  }
}

export default rootReducer;