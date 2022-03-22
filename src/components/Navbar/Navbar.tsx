import "../../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <span className="navbar__logo">arya</span>
      </div>
      <ul className="navbar__links-container">
        <NavLink to="/" className="navbar__link">
          <i className="ri-home-line"></i> Home
        </NavLink>
        <NavLink to="/" className="navbar__link">
          <i className="ri-article-line"></i> News
        </NavLink>
        <NavLink to="/" className="navbar__link">
          <i className="ri-line-chart-fill"></i> Cryptocurrencies
        </NavLink>
        <NavLink to="/" className="navbar__link">
          <i className="ri-exchange-line"></i> Exchanges
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
