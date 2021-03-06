import "../../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__links-container">
        <NavLink to="/home" className="navbar__link">
          <i className="ri-home-line navbar__link-icon"></i>
          <span className="navbar__link-text">Home</span>
        </NavLink>
        <NavLink to="/" className="navbar__link">
          <i className="ri-article-line navbar__link-icon"></i>
          <span className="navbar__link-text">News</span>
        </NavLink>
        <NavLink to="/" className="navbar__link">
          <i className="ri-line-chart-fill navbar__link-icon"></i>
          <span className="navbar__link-text">Cryptocurrencies</span>
        </NavLink>
        <NavLink to="/" className="navbar__link">
          <i className="ri-exchange-line navbar__link-icon"></i>
          <span className="navbar__link-text">Exchanges</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
