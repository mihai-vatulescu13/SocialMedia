import NavBar from "../../components/navbar/NavBar";
import { useRef } from "react";
import { connect } from "react-redux";
// import { loginAction } from '../../actions/actions'
import { Auth } from "../../actions/actions";
import "./login.css";

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
      <div className="heading-nav-form">
        <h1 className="login-reg-heading">Login</h1>
        <NavBar />
        <div className="login-form-container">
          <form action="submit" className="login-form" onSubmit={handleSubmit}>
            <div className="form-fields">
              <label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  ref={email}
                  className="form-textbox"
                />
              </label>
              <label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  ref={password}
                  className="form-textbox"
                />
              </label>
            </div>
            <div className="login-btn-box">
              <button className="submit-form-btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
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
