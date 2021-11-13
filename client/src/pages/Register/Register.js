import { useState, useRef } from "react";
import NavBar from "../../components/navbar/NavBar";
import './register.css';
import { connect } from "react-redux";
import { registerAction } from "../../actions/actions"


const Register = ({ registerUser }) => {
  const [isDataSent, setIsDataSent] = useState(false);

  const userData = {
    name: useRef(),
    email: useRef(),
    password: useRef()
  }

  const onRegisterUser = (e) => {
    e.preventDefault();
    const { name, email, password } = userData;

    registerUser({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    })

    name.current.value = '';
    email.current.value = '';
    password.current.value = '';

    setIsDataSent(true);
  }

  return (
    <div className="register-container">
      <h1>Register page</h1>
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
                className="form-input"
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
                className="form-input"
                required
                ref={userData.email}
              />
            </label>
            <label className="form-label">
              Password
              <input
                type="password"
                name="password"
                placeholder="password"
                className="form-input"
                required
                ref={userData.password}
              />
            </label>
          </div>
          <div className="form-buttons">
            <div className="submit-btn">
              <button
                className="submit"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div >
  );
}

const mapStateToProps = (state) => {
  return {}
}

const dispatchActions = (dispatch) => {
  //dispatch registerUser function to the reducer:
  return {
    registerUser: (userData) => {
      return dispatch(registerAction(userData))
    }
  }
}

export default connect(mapStateToProps, dispatchActions)(Register);