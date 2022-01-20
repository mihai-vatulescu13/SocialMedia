import HomeNav from "../../components/homeNav/HomeNav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./userPage.css";
import { connect } from "react-redux";
import PostModal from "../../components/PostModal/PostModal";
import axios from "axios";
import FollowModal from "../../components/FollowModal/FollowModal";
import RenderPosts from "../../components/RenderPosts/RenderPosts";
import UserDetails from "../../components/UserDetails/UserDetails";

const UserPage = ({ connectedUser }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  //modals hooks:
  const [openedPostModal, setOpenedPostModal] = useState(false);
  const [openedFollowsModal, setOpenedFollowsModal] = useState(false);
  const [openedFollowingsModal, setOpenedFollowingsModal] = useState(false);

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

  return (
    <div className="user-page-container">
      <section className="center-nav">
        <HomeNav className="home-nav-user-page" />
      </section>

      <UserDetails
        currentUser={currentUser}
        setOpenedFollowsModal
        setOpenedFollowingsModal
        userPosts={userPosts}
      />

      {/* redner here user posts */}
      <div className="user-posts">
        {userPosts && currentUser ? (
          <div className="user-posts-container">
            <RenderPosts
              userPosts={userPosts}
              setCurrentPost={setCurrentPost}
              setOpenedPostModal={setOpenedPostModal}
              onDeletePost={onDeletePost}
            />
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    connectedUser: state.AuthReducer,
  };
};

export default connect(mapStateToProps)(UserPage);
