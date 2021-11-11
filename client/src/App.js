import { connect } from 'react-redux';
import { incrementAction, decrementAction, sendNumber, setRegister } from './actions/counterAction';
import { useRef } from 'react';
import "./app.css"

function App({ counter, incrementCounter, decrementCounter, incrementBy, registerUser }) {
  //extract data from input fields by using useRef hook:
  const selectNum = useRef();
  const name = useRef();
  const email = useRef();
  const city = useRef();
  const password = useRef();

  return (
    <div className="App">
      <h1>Welcome to React Redux!</h1>
      <h3>counter: {counter}</h3>
      <p>Increment by:</p>
      <input type="number" ref={selectNum} />
      <button onClick={() => incrementBy(parseInt(selectNum.current.value))}>Send</button>

      <button onClick={() => incrementCounter()}>+</button>
      <button onClick={() => decrementCounter()}>-</button>

      <h3>insert your credentials into the form below:</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          // console.log('form was submitted', name.current.value, email.current.value)
          registerUser({
            name: name.current.value,
            email: email.current.value,
            city: city.current.value,
            password: password.current.value
          })
        }}
        className="reg-form">
        <input
          type="text"
          ref={name}
          placeholder="name"
        />
        <input
          type="text"
          ref={email}
          placeholder="email"
        />
        <input
          type="text"
          ref={city}
          placeholder="city"
        />
        <input
          type="text"
          ref={password}
          placeholder="password"
        />
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
}

//parameter = useSelector function
const mapStateToProps = state => {
  //return the counter state value:
  return { counter: state.countReducer.counter };
}

//parameter = useDispatch
const mapDispatchToProps = dispatch => {
  //return setCounter setter:
  return {
    incrementCounter: () => {
      return dispatch(incrementAction())
    },
    decrementCounter: () => {
      return dispatch(decrementAction())
    },
    incrementBy: (number) => {
      return dispatch(sendNumber(number))
    },
    registerUser: (userData) => {
      return dispatch(setRegister(userData))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);