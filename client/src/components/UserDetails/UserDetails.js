import { Link } from "react-router-dom";
import "./userDetails.css";

const UserDetails = ({
  currentUser,
  setOpenedFollowsModal,
  setOpenedFollowingsModal,
  userPosts,
}) => {
  const Pf = process.env.REACT_APP_ASSETS;

  return currentUser && userPosts ? (
    <div className="user-main-details">
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

        {/* {console.log("current user following arr:", currentUser.following)} */}

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

          <div className="user-nickname">{/* <h4>User nickname</h4> */}</div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default UserDetails;
