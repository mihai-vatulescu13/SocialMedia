import "./renderPosts.css";

const RenderPosts = ({
  userPosts,
  setCurrentPost,
  setOpenedPostModal,
  onDeletePost,
}) => {
  return (
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
            <button onClick={() => onDeletePost(post._id)}>Delete post</button>
          </div>
        );
      })}
    </div>
  );
};

export default RenderPosts;
