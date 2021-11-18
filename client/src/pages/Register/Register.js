import { useState, useRef } from "react";
import NavBar from "../../components/navbar/NavBar";
import "./register.css";
import { connect } from "react-redux";
// import { registerAction } from "../../actions/actions"
import { Auth } from "../../actions/actions";

const Register = ({ registerUser }) => {
  const [isDataSent, setIsDataSent] = useState(false);

  const userData = {
    name: useRef(),
    email: useRef(),
    city: useRef(),
    password: useRef(),
  };

  const onRegisterUser = (e) => {
    e.preventDefault();
    const { name, email, city, password } = userData;

    //pass user data to the dispatch and then to the action:
    registerUser({
      name: name.current.value,
      email: email.current.value,
      city: city.current.value,
      password: password.current.value,
    });

    name.current.value = "";
    email.current.value = "";
    city.current.value = "";
    password.current.value = "";

    setIsDataSent(true);
  };

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
              City:
              <input
                type="text"
                name="city"
                placeholder="city"
                className="form-input"
                ref={userData.city}
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
              <button className="submit" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
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
