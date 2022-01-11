import HomeNav from "../../components/homeNav/HomeNav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./userPage.css";
import { connect } from "react-redux";
import PostModal from "../../components/PostModal/PostModal";
import axios from "axios";

const UserPage = ({ connectedUser }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [openedPostModal, setOpenedPostModal] = useState(false);

  const Pf = process.env.REACT_APP_ASSETS;
  const { _id } = connectedUser;

  useEffect(() => {
    const getUserData = async () => {
      //get and set state with user data:
      const { data } = await axios.get(`/user/getUser/${_id}`);
      setCurrentUser(data);
      //get and set state with user posts
      const userPostsArray = await axios.get(`/post/getUserPosts/${_id}`);
      setUserPosts(userPostsArray.data);
    };

    getUserData();
  }, [_id]);

  const onDeletePost = async (postId) => {
    const response = await axios.delete(`/post/deletePost/${postId}`);
    console.log("deletion response:", response.data);
  };

  const onOpenPostModal = (postData) => {
    setCurrentPost(postData);
    setOpenedPostModal((prevVal) => !prevVal);
  };

  return (
    <div className="user-page-container">
      <section className="center-nav">
        <HomeNav className="home-nav-user-page" />
      </section>
      {currentUser ? (
        <section className="user-main-details">
          <div className="picture-and-details">
            <div className="picture-container">
              <img
                src={
                  currentUser.profilePicture === ""
                    ? Pf + "user-avatar.png"
                    : currentUser.profilePicture
                }
                alt="user profile"
                className="user-profile-picture"
              />
            </div>

            {console.log("current user following arr:", currentUser.following)}

            <div className="user-details">
              <div className="name-and-edit-profile">
                <h3>{currentUser.name}</h3>
                <button className="edit-profile-button">
                  <Link to="/editAccount" className="edit-profile-link">
                    Edit profile
                  </Link>
                </button>
              </div>
              <div className="posts-follows-followings">
                <h4>{userPosts.length} posts</h4>
                <h4>{currentUser.following.length} follows</h4>
                <h4>{currentUser.followed.length} followings</h4>
              </div>
              <div className="user-nickname">
                {/* <h4>User nickname</h4> */}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>Loading...</h1>
      )}
      {/* redner here user posts */}
      <div className="user-posts">
        {userPosts && currentUser ? (
          <div className="user-posts-container">
            <div className="posts-container">
              {userPosts.map((post, index) => {
                return (
                  <div
                    className="post-card"
                    key={index}
                    onClick={() => onOpenPostModal(post)}
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
              //render here the post modal(just for test)
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
          </div>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    connectedUser: state.AuthReducer,
  };
};

export default connect(mapStateToProps)(UserPage);
