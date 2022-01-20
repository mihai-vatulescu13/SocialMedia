import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostModal from '../../components/PostModal/PostModal';
import HomeNav from '../../components/homeNav/HomeNav';
import { connect } from 'react-redux';
import './foundUserPage.css';
import FollowModal from '../../components/FollowModal/FollowModal';

const FoundUserPage = ({ connectedUser }) => {
  const { _id } = connectedUser; //comes from current user data(from redeux)
  const { userId } = useParams(); //comes as URL parameter
  const [foundUser, setFoundUser] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [userFollowed, setUserFollowed] = useState(false);

  const [openedPostModal, setOpenedPostModal] = useState(false);
  const [openedFollowsModal, setOpenedFollowsModal] = useState(false);
  const [openedFollowingsModal, setOpenedFollowingsModal] = useState(false);

  // const [stateGeneral, setGeneral] = useState({
  //   foundUser: '',
  //   userPosts: [],
  //   currentPost: {},
  //   userFollowed: false,
  // });

  const Pf = process.env.REACT_APP_ASSETS;

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get(`/user/getUser/${userId}`);

      if (data.followed.some((user) => user._id === _id)) {
        setUserFollowed(true);
      } else {
        setUserFollowed(false);
      }

      setFoundUser(data);

      const userPostsArray = await axios.get(`/post/getUserPosts/${userId}`);
      setUserPosts(userPostsArray.data);
    };

    getUserData();
  }, []);

  const onOpenPostModal = (postData) => {
    setCurrentPost(postData);
    setOpenedPostModal((prevVal) => !prevVal);
  };

  const onOpenFollowsModal = () => {
    setOpenedFollowsModal((prevVal) => !prevVal);
    setOpenedFollowingsModal(false);
  };

  const onOpenFollowingsModal = () => {
    setOpenedFollowingsModal((prevVal) => !prevVal);
    setOpenedFollowsModal(false);
  };

  const followSelectedUser = async () => {
    const { data } = await axios.put(`/user/followUser/${_id}`, {
      foundUser,
      connectedUser,
      userFollowed,
    });
    console.log('follow response:', data);

    setUserFollowed(!userFollowed);
  };

  return (
    <div className="found-user-page-container">
      <section className="center-nav">
        <HomeNav className="home-nav-user-page" />
      </section>
      {foundUser ? (
        <div className="found-user-page">
          <section className="user-main-details">
            <div className="picture-and-details">
              <div className="picture-container">
                <img
                  src={
                    foundUser.profilePicture === ''
                      ? Pf + 'user-avatar.png'
                      : foundUser.profilePicture
                  }
                  alt="user profile"
                  className="user-profile-picture"
                />
              </div>

              <div className="user-details">
                <div className="name-and-edit-profile">
                  <h3>{foundUser.name}</h3>
                  <button
                    className="follow-button"
                    onClick={() => {
                      followSelectedUser();
                    }}
                  >
                    {userFollowed ? 'Unfollow' : 'Follow'}
                  </button>
                </div>
                <div className="posts-follows-followings">
                  <h4>{userPosts.length} posts</h4>
                  <div className="follows-heading">
                    <h4
                      onClick={() => {
                        onOpenFollowsModal();
                      }}
                    >
                      {foundUser.following.length} follows
                    </h4>
                  </div>
                  <div className="follows-heading">
                    <h4 onClick={() => onOpenFollowingsModal()}>
                      {foundUser.followed.length} followings
                    </h4>
                  </div>
                </div>
                <div className="user-nickname">
                  {/* <h4>User nickname</h4> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <div className="user-posts">
        {userPosts && foundUser ? (
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
                  userData={foundUser}
                />
              ) : (
                <></>
              )
            }
            {openedFollowsModal ? (
              <FollowModal
                heading="Follows"
                openedFollowsModal={openedFollowsModal}
                setOpenedFollowsModal={setOpenedFollowsModal}
                followsUsers={foundUser ? foundUser.following : []}
              />
            ) : (
              <></>
            )}
            {openedFollowingsModal ? (
              <FollowModal
                heading="Is followed by"
                openedFollowsModal={openedFollowingsModal}
                setOpenedFollowsModal={setOpenedFollowingsModal}
                followsUsers={foundUser ? foundUser.followed : []}
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

//extract state from redux:
const mapStateToProps = (state) => {
  return {
    connectedUser: state.AuthReducer,
  };
};

export default connect(mapStateToProps)(FoundUserPage);
