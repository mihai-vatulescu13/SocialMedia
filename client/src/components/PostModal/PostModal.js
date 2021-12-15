import './postModal.css';

const PostModal = ({ post, setOpenedPostModal }) => {
  return (
    <div className="background-modal-container">
      <div className="card-modal-container">
        <img src={post.image} alt="post" className="post-img" />
        <div className="info-post">
          <div className="user-post">
            <img src={post.image} alt="userImage" className="userImage" />
            <span className="post-manu"> &#8230;</span>
          </div>
          <div className="comments-section">
            <h3>{post.description}</h3>
            <button
              className="close-post-modal-btn"
              onClick={() => setOpenedPostModal()}
            >
              Close
            </button>
          </div>
          <div className="react-socialbar">ba</div>
          <div className="input-sendComment">ba</div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
