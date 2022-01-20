import HomeNav from "../../components/homeNav/HomeNav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./userPage.css";
import { connect } from "react-redux";
import axios from "axios";
import RenderPost from "../../components/RenderHomePost/RenderPost";
import UserDetails from "../../components/UserDetails/UserDetails";

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

      <UserDetails
        currentUser={currentUser}
        setOpenedFollowsModal
        setOpenedFollowingsModal
        userPosts={currentUser}
      />

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
