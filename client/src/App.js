import { connect } from 'react-redux';
import { incrementAction, decrementAction, sendNumber } from './actions/counterAction';
import { useRef } from 'react';

function App({ counter, incrementCounter, decrementCounter, incrementBy }) {
  const selectNum = useRef();

  return (
    <div className="App">
      <h1>Welcome to React Redux!</h1>
      <h3>counter: {counter}</h3>
      <p>cu ce val vrei sa se incrementeze?</p>
      <input type="number" ref={selectNum} />
      <button onClick={() => incrementBy(parseInt(selectNum.current.value))}>Send nudes</button>

      <button onClick={() => incrementCounter()}>+</button>
      <button onClick={() => decrementCounter()}>-</button>
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);