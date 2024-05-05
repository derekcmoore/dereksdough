import { useState } from "react";
import "./Nav.scss";
import useWindowDimensions from "../hooks/useWindowDimensions";

import burgerMenu from "../assets/icons/burger-menu.svg";
import logo from "../assets/logos/full.png";
import profile from "../assets/icons/profile.svg";

function Nav() {
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (width > 768) isMenuOpen && setIsMenuOpen(false);

  return (
    <>
      <div className="nav">
        <img
          src={burgerMenu}
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className="logo-wrapper">
          <img src={logo} className="logo" alt="Derek's Dough Logo" />
        </div>

        <div className={`items ${isMenuOpen ? "show" : "hide"}`}>
          <div className="item">
            <a href="#home">
              Home
            </a>
          </div>

          <div className="item">
            <a href="#about">
              About
            </a>
          </div>

          <div className="item">
            <a href="#menu">
              Menu
            </a>
          </div>

          <div className="item">
            <a href="#contact">
              Contact
            </a>
          </div>
        </div>
        <a href="#profile" className="item">
          <img src={profile} className="profile" />
        </a>
      </div>
      {isMenuOpen && <div className="overlay"></div>}
    </>
  );
}

export default Nav;
