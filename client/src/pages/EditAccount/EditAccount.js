import axios from "axios";
import { useRef, useEffect, useState } from "react";
import "./editAccount.css";
import { connect } from "react-redux";

const EditAccount = ({ connectedUser }) => {
  const [user, setUser] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const imageFile = useRef();
  const { _id } = connectedUser;

  useEffect(() => {
    const getUser = async () => {
      const resultUser = await axios.get(`/user/getUser/${_id}`);
      setUser(resultUser.data);
    };
    getUser();
  }, [_id]);

  const onDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onConfirmedPassword = (e) => {
    setConfirmedPassword(e.target.value);
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

    if (confirmedPassword !== "" && user.password !== confirmedPassword) {
      return console.error("passwords didn't match");
    }

    const base64Image = await convertBase64(image);

    await axios.put(`/user/editUser/${_id}`, {
      ...user,
      profilePicture: base64Image,
    });

    console.log("data updated with success");
  };

  return (
    <div className="account-container">
      {user ? (
        <form action="submit" className="edit-form" onSubmit={onEditAccount}>
          <h2 className="edit-account-heading">Edit account</h2>
          <div className="form-fields">
            <label className="form-label">
              Change name:
              <input
                type="text"
                name="name"
                placeholder={user.name}
                className="form-input"
                onChange={(e) => onDataChange(e)}
              />
            </label>

            <label className="form-label">
              City:
              <input
                type="text"
                name="city"
                //placeholder={city}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Change password:
              <input
                type="password"
                name="password"
                className="form-input"
                onChange={(e) => onDataChange(e)}
              />
            </label>

            <label className="form-label">
              Confirm password:
              <input
                type="password"
                className="form-input"
                onChange={(e) => onConfirmedPassword(e)}
              />
            </label>

            <div className="upload-heading-and-input">
              <h4>Change profile picture</h4>
              <div className="profile-picture-upload">
                <input
                  type="file"
                  className="post-img-icon"
                  accept=".jpg, .png, .jpeg"
                  ref={imageFile}
                />
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <div className="submit-btn">
              <button className="edit-form-btn" type="submit">
                Save
              </button>
              <button className="edit-form-btn">Back</button>
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
