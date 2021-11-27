import { useRef } from "react";
import "./postUpload.css";

const PostUpload = () => {
  const description = useRef();
  const location = useRef();
  const postImage = useRef();

  const onUpload = (e) => {
    e.preventDefault();
    console.log(
      "data:",
      description.current.value,
      location.current.value,
      postImage.current.files[0]
    );
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

export default PostUpload;
