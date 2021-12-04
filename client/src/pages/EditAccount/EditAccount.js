import axios from "axios";
import { useRef, useEffect, useState } from "react";
import "./editAccount.css";
import { connect } from "react-redux";

const EditAccount = ({ connectedUser }) => {
  const [user, setUser] = useState();

  const { _id } = connectedUser;

  useEffect(() => {
    const getUser = async () => {
      const resultUser = await axios.get(`/user/user/${_id}`);
      console.log(resultUser.data);

      setUser(resultUser.data);
    };
    getUser();
  }, []);

  const onDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onEditAccount = async (e) => {
    e.preventDefault();
    //to be continued:
    //the password needs to be encrypted on the server side(edit account endpoint)
    console.log("new user data:", user);
  };

  return (
    <div className="account-container">
      <h2>Edit account</h2>
      {user ? (
        <form action="submit" className="edit-form" onSubmit={onEditAccount}>
          <div className="form-fields">
            <label className="form-label">
              Change name:
              <input
                type="text"
                name="name"
                placeholder={user.name}
                className="form-input"
                name="name"
                onChange={(e) => onDataChange(e)}
              />
            </label>
            {/* <label className="form-label">
              City:
              <input
                type="text"
                name="city"
                //placeholder={city}
                className="form-input"
              />
            </label> */}
            <label className="form-label">
              Change password:
              <input
                type="password"
                name="password"
                className="form-input"
                name="password"
                onChange={(e) => onDataChange(e)}
              />
            </label>
          </div>

          <div className="form-buttons">
            <div className="submit-btn">
              <button className="submit-edit" type="submit">
                Save data
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="loading-box">
          <h1>Loading ...</h1>
        </div>
      )}
      {/* to be continued */}
      <div className="sign-out-button-box">
        {/* <button onClick={() => setIsConnected(false)}>
          Sign out
        </button> */}
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
