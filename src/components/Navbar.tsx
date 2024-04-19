import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // code to toggle/show navbar;
  const [active, setActive] = useState("navbar");
  const showNav = () => {
    setActive("navbar active-navbar");
  };

  // code to remove navbar
  const removeNav = () => {
    setActive("navbar");
  };

  // code to add background color to the header
  const [transparent, setTransparet] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparet("header active-header");
    } else {
      setTransparet("header");
    }
  };

  window.addEventListener("scroll", addBg);

  return (
    <section className="navbar-section">
      <div className={transparent}>
        <div
          className="logo-div"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="logo" style={{ color: "#438D7C", cursor: "pointer" }}>
            BeraniPeduli
          </div>
        </div>
        <div className={active}>
          <ul className="nav-lists flex">
            <li
              className="nav-item "
              onClick={() => {
                navigate("/");
              }}
            >
              <div
                className="nav-link active-nav"
                style={{ color: "#438D7C", fontWeight: 700 }}
              >
                Home
              </div>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div className="nav-link">About</div>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                navigate("/donate");
              }}
            >
              <div className="nav-link">Donate</div>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                navigate("/membership");
              }}
            >
              <div className="nav-link">Membership</div>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                navigate("/volunteer");
              }}
            >
              <div className="nav-link">Volunteer</div>
            </li>
          </ul>
          <div onClick={removeNav} className="close-navbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggle-navbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
