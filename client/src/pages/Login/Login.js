import NavBar from '../../components/navbar/NavBar';
import { useRef } from 'react';
import { connect } from 'react-redux';
// import { loginAction } from '../../actions/actions'
import { Auth } from '../../actions/actions';

//add the style for this component later on:
const Login = ({ connectedUser, setUserLogin }) => {
  //to be continued: replace state with refs and brind here reducer actins and the state from the store:
  let email = useRef();
  let password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    //send data to the action and then to the reducer:
    setUserLogin({
      email: email.current.value,
      password: password.current.value,
    });
  };

  return (
    <div className="login-container">
      <h1>Login page</h1>
      <NavBar />
      <div className="login-form-container">
        <form action="submit" className="login-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <label>
              <input type="text" placeholder="email" name="email" ref={email} />
            </label>
            <label>
              <input
                type="password"
                placeholder="password"
                name="password"
                ref={password}
              />
            </label>
          </div>
          <div className="form-buttons">
            <div className="login-btn">
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    connectedUser: state.AuthReducer,
  };
};

const dispatchActions = (dispatch) => {
  return {
    setUserLogin: (userData) => dispatch(Auth(userData)),
  };
};

export default connect(mapStateToProps, dispatchActions)(Login);
