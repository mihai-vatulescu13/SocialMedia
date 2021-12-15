import { useEffect } from 'react';
import { useRef } from 'react';
import './postModal.css';

const PostModal = ({ post, setOpenedPostModal }) => {
  const cardRef = useRef();
  useEffect(() => {
    const outsideClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setOpenedPostModal();
      }
    };
    document.addEventListener('click', outsideClick);
    return () => {
      document.removeEventListener('click', outsideClick);
    };
  }, []);
  return (
    <div className="background-modal-container">
      <div className="card-modal-container" ref={cardRef}>
        <img src={post.image} alt="post" className="post-img" />
        <div className="info-post">
          <div className="user-post">
            <img src={post.image} alt="userImage" className="userImage" />
            <span className="post-manu"> &#8230;</span>
          </div>
          <div className="comments-section">
            <h3>{post.description}</h3>
          </div>
          <div className="react-socialbar">ba</div>
          <div className="input-sendComment">ba</div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
