import './renderpost.css';
import { useState } from 'react';
import FollowModal from '../../components/FollowModal/FollowModal';
import PostModal from '../../components/PostModal/PostModal';
import axios from 'axios';

const RenderPost = ({
  userPosts,
  currentUser,
  openedFollowsModal,
  setOpenedFollowsModal,
  setOpenedFollowingsModal,
  openedFollowingsModal,
}) => {
  const [openedPostModal, setOpenedPostModal] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  const onDeletePost = async (postId) => {
    await axios.delete(`/post/deletePost/${postId}`);
  };
  return (
    <div className="user-posts">
      {userPosts && currentUser ? (
        <div className="user-posts-container">
          <div className="posts-container">
            {userPosts.map((post, index) => {
              return (
                <div
                  className="post-card"
                  key={index}
                  onClick={() => {
                    setCurrentPost(post);
                    setOpenedPostModal((prevVal) => !prevVal);
                  }}
                >
                  <img src={post.image} alt="post" className="post-picture" />
                  <button
                    className="delete-post"
                    onClick={() => onDeletePost(post._id)}
                  >
                    Delete post
                  </button>
                </div>
              );
            })}
          </div>
          {
            //current user post modal:
            openedPostModal === true ? (
              <PostModal
                post={currentPost}
                openedPostModal={openedPostModal}
                setOpenedPostModal={setOpenedPostModal}
                userData={currentUser}
              />
            ) : (
              <></>
            )
          }
          {openedFollowsModal ? (
            <FollowModal
              heading="Follows"
              setOpenedFollowsModal={setOpenedFollowsModal}
              followsUsers={currentUser ? currentUser.following : []}
            />
          ) : (
            <></>
          )}
          {openedFollowingsModal ? (
            <FollowModal
              heading="Is followed by"
              setOpenedFollowsModal={setOpenedFollowingsModal}
              followsUsers={currentUser ? currentUser.followed : []}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default RenderPost;
