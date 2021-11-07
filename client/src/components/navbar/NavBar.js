import { Router, Link } from "react-router-dom"
import './navBar.css';

export default function NavBar() {
  return (
    <nav className="main-menu">
      <Link to="login" className="link-item">Login</Link>
      <Link to="register" className="link-item">Register</Link>
    </nav >
  )
}