import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faTrophy } from "@fortawesome/free-solid-svg-icons";
import "./homeNav.css";

export default function HomeNav() {
  const PF = process.env.REACT_APP_ASSETS;

  return (
    <div className="home-navigation-container">
      <nav className="home-navigation">
        <div className="app-logo">
          <h1>SocialYou</h1>
        </div>

        <div className="search-box">
          <Search />
        </div>

        <div className="profile-links">
          <Link to="/" className="link-item">
            <FontAwesomeIcon icon={faHouseUser} className="nav-icon" />
          </Link>

          <Link to="topArticles" className="link-item">
            <FontAwesomeIcon icon={faTrophy} className="nav-icon" />
          </Link>
          <Link to="/userAccountPage" className="link-item">
            <img
              src={PF + "user-avatar.png"}
              alt="user avatar"
              className="nav-avatar"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
