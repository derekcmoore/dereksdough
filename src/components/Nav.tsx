import { useState, useEffect } from "react";
import "./Nav.scss";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

import logo from "../assets/logos/full.png";
import profile from "../assets/icons/profile.svg";

function Nav() {
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const navigate = useNavigate();
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [navigate]);

  if (width > 768) isMenuOpen && setIsMenuOpen(false);

  return (
    <>
      <div className="nav">
        <div
          id="nav-icon"
          className={isMenuOpen ? "open" : ""}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo-wrapper">
          <a href="/">
            <img src={logo} className="logo" alt="Derek's Dough Logo" />
          </a>
        </div>

        <div className={`items ${isMenuOpen ? "show" : "hide"}`}>
          <div className={`item ${currentPage == "/" ? "active" : ""}`}>
            <a href="/">Home</a>
          </div>

          <div className={`item ${currentPage == "/about" ? "active" : ""}`}>
            <a href="about">About</a>
          </div>

          <div className={`item ${currentPage == "/recipes" ? "active" : ""}`}>
            <a href="recipes">Recipes</a>
          </div>

          <div className={`item ${currentPage == "/contact" ? "active" : ""}`}>
            <a href="contact">Contact</a>
          </div>
        </div>
        <a href="profile" className="item">
          <img src={profile} className="profile" />
        </a>
      </div>
      {isMenuOpen && <div className="overlay"></div>}
    </>
  );
}

export default Nav;
