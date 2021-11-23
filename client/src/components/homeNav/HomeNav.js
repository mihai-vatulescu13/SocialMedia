import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./homeNav.css";

export default function HomeNav() {
  return (
    <div className="home-navigation-container">
      <nav className="home-navigation">
        <h1>SocialYou</h1>

        <Search />

        <Link to="/" className="link-item">
          Home
        </Link>
        <Link to="/editAccount" className="link-item">
          Edit account
        </Link>
        <Link to="topArticles" className="link-item">
          Top articles
        </Link>
        <Link to="/userAccountPage" className="link-item">
          You
        </Link>
      </nav>
    </div>
  );
}
