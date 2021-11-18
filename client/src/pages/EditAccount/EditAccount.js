import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";

const EditAccount = ({ connectedUser }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    // axios.get("/");
  }, []);

  const newUserData = {
    name: useRef(),
    password: useRef(),
    city: useRef(),
  };

  const editUserData = (event) => {
    event.preventDefault();
  };

  return (
    <div className="account-container">
      <h2>Edit account</h2>
      <form action="submit" className="edit-form" onSubmit={editUserData}>
        <div className="form-fields">
          <label className="form-label">
            Name:
            <input
              ref={newUserData.name}
              type="text"
              name="name"
              //placeholder={name}
              className="form-input"
            />
          </label>
          <label className="form-label">
            City:
            <input
              ref={newUserData.city}
              type="text"
              name="city"
              //placeholder={city}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Password:
            <input
              ref={newUserData.password}
              type="password"
              name="password"
              //placeholder="password"
              className="form-input"
            />
          </label>
        </div>
        <div className="form-buttons">
          <div className="submit-btn">
            <button className="submit" type="submit">
              Edit
            </button>
          </div>
        </div>
      </form>

      <div className="sign-out-button-box">
        <button type="submit">Sign out</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    connectedUser: state.AuthReducer,
  };
};

export default connect(mapStateToProps)(EditAccount);
