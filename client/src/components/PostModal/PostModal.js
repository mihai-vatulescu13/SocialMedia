import "./postModal.css";

const PostModal = ({ post, setOpenedPostModal }) => {
  return (
    <div className="post-modal-container">
      <div className="picture-post-container">
        <img src={post.image} alt="post" className="post-img" />
      </div>
      <div className="description-actions-container">
        <h3>{post.description}</h3>
        <button
          className="close-post-modal-btn"
          onClick={() => setOpenedPostModal()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PostModal;
