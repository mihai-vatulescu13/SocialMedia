import { useRef } from "react";
import "./postUpload.css";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const PostUpload = ({ user }) => {
  const description = useRef();
  const location = useRef();
  const postImage = useRef();

  const nav = useNavigate();

  const onUpload = async (e) => {
    e.preventDefault();
    let file = postImage.current.files[0];

    const options = {
      maxSizeMB: 0.4,
      maxWidthOrHeight: 1300,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);

      const convertBase64 = (file) => {
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
      };

      const base64 = await convertBase64(compressedFile);

      //base64 -> our image
      await axios.post(`/post/addPost?user=${user}`, {
        description: description.current.value,
        image: base64,
        location: location.current.value,
      });
    } catch (err) {
      console.log(err);
    }
    nav("/");
  };

  return (
    <div className="post-upload">
      <div className="center-upload-page">
        <form onSubmit={onUpload} className="post-ulpoad-form">
          <h2 className="main-heading">What are you thinking about?</h2>
          <textarea
            type="text"
            className="post-description"
            placeholder="your thoughts..."
            ref={description}
          />

          <input
            type="text"
            className="location"
            placeholder="your location"
            ref={location}
          />

          <input
            type="file"
            className="post-img"
            accept=".jpg, .png, .jpeg"
            ref={postImage}
            required
          />

          {/* <div className="preview-image">
            {image ? (
              <img
                src={image}
                style={{ width: "360px", height: "auto" }}
                alt="preview"
              />
            ) : (
              <></>
            )}
          </div> */}

          <button type="submit" className="upload-btn">
            send
          </button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.AuthReducer._id,
  };
};

export default connect(mapStateToProps)(PostUpload);
