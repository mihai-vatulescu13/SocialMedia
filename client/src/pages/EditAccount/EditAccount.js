import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";

const EditAccount = ({ connectedUser }) => {
  const [user, setUser] = useState();
  let name = useRef();
  let password = useRef();

  const { _id } = connectedUser;
  console.log("user id:", _id);

  useEffect(() => {
    const getUser = async () => {
      const resultUser = await axios.get(`/user/user/${_id}`);
      console.log(resultUser.data);
      setUser(resultUser.data);
    };
    getUser();
  }, []);

  const onEditAccount = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="account-container">
      <h2>Edit account</h2>
      {user ? (
        <form action="submit" className="edit-form" onSubmit={onEditAccount}>
          <div className="form-fields">
            <label className="form-label">
              Name:
              <input
                type="text"
                name="name"
                placeholder={user.name}
                className="form-input"
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
              Password:
              <input
                type="password"
                name="password"
                //placeholder="password"
                className="form-input"
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
        <h1>Loading ...</h1>
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
