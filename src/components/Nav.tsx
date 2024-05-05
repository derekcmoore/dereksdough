import logo from "../assets/logos/full.png";
import "./Nav.scss";

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="logo-wrapper">
          <img src={logo} className="logo" alt="Derek's Dough Logo" />
        </div>
        <div className="items">
          <a href="#home" className="item">Home</a>
          <a href="#about" className="item">About</a>
          <a href="#menu" className="item">Menu</a>
          <a href="#contact" className="item">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Nav;
