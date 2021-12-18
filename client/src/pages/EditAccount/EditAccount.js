import axios from "axios";
import { useRef, useEffect, useState } from "react";
import "./editAccount.css";
import { connect } from "react-redux";

const EditAccount = ({ connectedUser }) => {
  const [user, setUser] = useState();

  const imageFile = useRef();
  const { _id } = connectedUser;

  useEffect(() => {
    const getUser = async () => {
      const resultUser = await axios.get(`/user/getUser/${_id}`);
      setUser(resultUser.data);
    };
    getUser();
  }, []);

  const onDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onEditAccount = async (e) => {
    e.preventDefault();
    //the password needs to be encrypted on the server side(edit account endpoint)

    let image = imageFile.current.files[0];

    const convertBase64 = (file) => {
      if (file) {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);

          fileReader.onload = () => {
            resolve(fileReader.result);
          };

          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      }
    };

    const base64Image = await convertBase64(image);

    await axios.put(`/user/editUser/${_id}`, {
      ...user,
      profilePicture: base64Image,
    });
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
            <div className="add-profile-picture">
              <input
                type="file"
                className="add-picture"
                // accept=".jpg .png .jpeg"
                ref={imageFile}
              />
            </div>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    connectedUser: state.AuthReducer,
  };
};

export default connect(mapStateToProps)(EditAccount);
