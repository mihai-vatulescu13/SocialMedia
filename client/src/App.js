// import { useSelector, useDispatch } from 'react-redux';
//useDispatch -> used to send action to the reducer(dispatch actions)
//useSelector -> used to grab the ministate from the reducer file:
import { connect } from 'react-redux';
import { incrementAction } from './actions/counterAction'

function App({ counter, setCounter }) {
  // const dispatch = useDispatch();
  // const counter = useSelector((state) => console.log('received state:', state));

  return (
    <div className="App">
      <h1>Welcome to React Redux!</h1>
      <h3>counter: {counter}</h3>
      <button onClick={() => setCounter()}>+</button>
      <button onClick={() => setCounter()}>-</button>
    </div>
  );
}

//parameter = useSelector function
const mapStateToProps = state => {
  //return the counter state value:
  return { counter: state.counter };
}

//parameter = useDispatch
const mapDispatchToProps = dispatch => {
  //return setCounter setter:
  return {
    setCounter: () => {
      return dispatch(incrementAction())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);