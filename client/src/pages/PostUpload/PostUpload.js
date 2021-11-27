import { useRef, useState } from "react";
import "./postUpload.css";

const PostUpload = () => {
  const [image, setImage] = useState(null);

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
    console.log(base64);
    //base64 -> our image
    setImage(base64);
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

        <div className="preview-image">
          {image ? (
            <img
              src={image}
              style={{ width: "100px", height: "auto" }}
              alt="preview"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostUpload;
