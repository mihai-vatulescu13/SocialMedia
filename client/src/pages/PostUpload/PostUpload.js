import { useRef, useState } from 'react';
import './postUpload.css';
import axios from 'axios';
import { connect } from 'react-redux';

const PostUpload = ({ user }) => {
  const description = useRef();
  const location = useRef();
  const postImage = useRef();

  const onUpload = async (e) => {
    e.preventDefault();
    let file = postImage.current.files[0];

    const converBase64 = (file) => {
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

    const base64 = await converBase64(file);
    //base64 -> our image
    await axios.post(`/post/addPost?user=${user}`, {
      description: description.current.value,
      image: base64,
      location: location.current.value,
    });
  };

  return (
    <div className="post-upload">
      <div className="center-upload-page">
        <form onSubmit={onUpload}>
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
