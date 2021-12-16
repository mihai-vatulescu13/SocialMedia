import { useEffect } from "react";
import { useRef } from "react";
import { format } from "timeago.js";
import "./postModal.css";

const PostModal = ({ post, setOpenedPostModal, userData }) => {
  const cardRef = useRef();

  useEffect(() => {
    const outsideClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setOpenedPostModal();
      }
    };
    document.addEventListener("click", outsideClick);
    return () => {
      document.removeEventListener("click", outsideClick);
    };
  }, []);

  return (
    <div className="background-modal-container">
      <div className="card-modal-container" ref={cardRef}>
        <img src={post.image} alt="post" className="post-img" />
        <div className="info-post">
          <div className="user-post">
            <div className="image-and-username">
              <img
                src={userData.profilePicture}
                alt="userImage"
                className="userImage"
              />
              <h4 className="username-heading">{userData.name}</h4>
            </div>
            <span className="post-menu"> &#8230;</span>
          </div>
          <div className="comments-section">
            <h5 className="posted-date">{format(post.createdAt)}</h5>
            <h3 className="post-desc-heading">{post.description}</h3>
          </div>
          <div className="react-socialbar">ba dane</div>
          <div className="input-sendComment">ba ba ba</div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
