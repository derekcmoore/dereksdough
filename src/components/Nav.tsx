import { useState } from "react";
import "./Nav.scss";
import useWindowDimensions from "../hooks/useWindowDimensions";

import logo from "../assets/logos/full.png";
import profile from "../assets/icons/profile.svg";

function Nav() {
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <img src={logo} className="logo" alt="Derek's Dough Logo" />
        </div>

        <div className={`items ${isMenuOpen ? "show" : "hide"}`}>
          <div className="item">
            <a href="/">Home</a>
          </div>

          <div className="item">
            <a href="about">About</a>
          </div>

          <div className="item">
            <a href="menu">Menu</a>
          </div>

          <div className="item">
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
