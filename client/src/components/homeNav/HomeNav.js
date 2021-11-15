import { Link } from "react-router-dom";
import Search from '../Search/Search'
import './homeNav.css'

export default function HomeNav() {

  return (
    <div className="home-navigation-container">
      <nav className="home-navigation">
        <Link to="/" className="link-item">Home</Link>
        <Link to="/editAccount" className="link-item">Edit account</Link>
        <Link to="topArticles" className="link-item">Top articles</Link>

        {/* add here the search component */}
        <Search />
        <Link to="/userAccountPage" className="link-item">You</Link>
      </nav>
    </div>
  )
}

