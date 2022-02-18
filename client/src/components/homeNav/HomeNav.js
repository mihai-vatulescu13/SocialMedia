import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUsers,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import "./homeNav.css";
import { connect } from "react-redux";

const HomeNav = ({ connectedUser }) => {
  const PF = process.env.REACT_APP_ASSETS;
  const { profilePicture } = connectedUser;

  return (
    <div className="home-navigation-container">
      <nav className="home-navigation">
        <div className="app-logo">
          <Link className="app-logo-text" to="/">
            <img
              src={PF + "appLogo.png"}
              className="application-logo"
              alt="app logo"
            />
          </Link>
        </div>

        <div className="search-box">
          <Search />
        </div>

        <div className="profile-links">
          <Link to="/" className="link-item">
            <FontAwesomeIcon icon={faHouseUser} className="nav-icon" />
          </Link>

          <Link to="/messenger" className="link-item">
            <FontAwesomeIcon icon={faCommentDots} className="nav-icon" />
          </Link>

          <Link to="/upload" className="link-item">
            {/* <FontAwesomeIcon icon={faCameraRetro} className="nav-icon" /> */}
            <img
              src={PF + "add-post-logo.png"}
              alt="add post logo"
              className="upload-post-logo"
            />
          </Link>

          <Link to="topArticles" className="link-item">
            <FontAwesomeIcon icon={faUsers} className="nav-icon" />
          </Link>
          <Link to="/userAccountPage" className="link-item">
            <img
              src={profilePicture ? profilePicture : PF + "user-avatar.png"}
              alt="user avatar"
              className="nav-avatar"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    connectedUser: state.AuthReducer,
  };
};

export default connect(mapStateToProps)(HomeNav);
