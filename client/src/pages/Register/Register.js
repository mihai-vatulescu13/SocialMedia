import { useRef } from "react";
import NavBar from "../../components/navbar/NavBar";
import "./register.css";
import { connect } from "react-redux";
// import { registerAction } from "../../actions/actions"
import { Auth } from "../../actions/actions";

const Register = ({ registerUser }) => {
  const userData = {
    name: useRef(),
    email: useRef(),
    password: useRef(),
  };

  const onRegisterUser = (e) => {
    e.preventDefault();
    const { name, email, password } = userData;

    //pass user data to the dispatch and then to the action:
    registerUser({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    });

    name.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div className="register-container">
      <div className="heading-nav-form">
        <h1 className="login-reg-heading">Register</h1>
        <NavBar />
        <div className="register-form-container">
          <form
            action="submit"
            className="register-form"
            onSubmit={onRegisterUser}
          >
            <div className="form-fields">
              <label className="form-label">
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="username"
                  className="form-textbox"
                  required
                  ref={userData.name}
                />
              </label>
              <label className="form-label">
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form-textbox"
                  required
                  ref={userData.email}
                />
              </label>
              <label className="form-label">
                City:
                <input
                  type="text"
                  name="city"
                  placeholder="city"
                  className="form-textbox"
                  ref={userData.city}
                />
              </label>
              <label className="form-label">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="form-textbox"
                  required
                  ref={userData.password}
                />
              </label>
            </div>
            <div className="reg-btn-box">
              <button className="submit-form-btn" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const dispatchActions = (dispatch) => {
  //dispatch registerUser function to the reducer:
  return {
    registerUser: (userData) => {
      return dispatch(Auth(userData));
    },
  };
};

export default connect(null, dispatchActions)(Register);
