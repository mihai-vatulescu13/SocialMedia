import HomeNav from '../../components/homeNav/HomeNav';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './userPage.css';
import { connect } from 'react-redux';
import axios from 'axios';
import RenderPost from '../../components/RenderHomePost/RenderPost';

const UserPage = ({ connectedUser }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userPosts, setUserPosts] = useState([]);
  //modals hooks:
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
                  currentUser.profilePicture === ''
                    ? Pf + 'user-avatar.png'
                    : currentUser.profilePicture
                }
                alt="user profile"
                className="user-profile-picture"
              />
            </div>

            <div className="user-details">
              <div className="name-and-edit-profile">
                <h3>{currentUser.name}</h3>
                <button className="edit-profile-button">
                  <Link to="/editAccount" className="edit-profile-link">
                    Edit profile
                  </Link>
                </button>
              </div>

              <ul className="posts-follows-followings">
                <li>{userPosts.length} posts</li>

                <li
                  onClick={() => {
                    setOpenedFollowsModal((prevVal) => !prevVal);
                    setOpenedFollowingsModal(false);
                  }}
                >
                  {currentUser.following.length} follows
                </li>

                <li
                  onClick={() => {
                    setOpenedFollowingsModal((prevVal) => !prevVal);
                    setOpenedFollowsModal(false);
                  }}
                >
                  {currentUser.followed.length} followings
                </li>
              </ul>

              <div className="user-nickname">
                {/* <h4>User nickname</h4> */}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>Loading...</h1>
      )}
      <RenderPost
        userPosts={userPosts}
        currentUser={currentUser}
        openedFollowsModal={openedFollowsModal}
        setOpenedFollowsModal={setOpenedFollowsModal}
        setOpenedFollowingsModal={setOpenedFollowingsModal}
        openedFollowingsModal={openedFollowingsModal}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    connectedUser: state.AuthReducer,
  };
};

export default connect(mapStateToProps)(UserPage);
