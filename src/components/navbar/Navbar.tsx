import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();

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
            // navigate("/home");
          }}
        >
          <h1 className="logo" style={{ color: "#438D7C", cursor: "pointer" }}>
            BeraniPeduli
          </h1>
        </div>
        <div className={active}>
          {/* <ul className="nav-lists flex">
            {navItems.map((item) => {
              return <NavItem route={item} />;
            })}
            <button
              className="btn book-now"
              onClick={() => {
                navigate("/reservation");
              }}
            >
              Book Now
            </button>
          </ul> */}
          <ul className="nav-lists flex">
            <li
              className="nav-item active-nav"
              onClick={() => {
                // navigate("/home");
              }}
            >
              <div
                className="nav-link"
                style={{ color: "#438D7C", fontWeight: 700 }}
              >
                Home
              </div>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                // navigate("/about");
              }}
            >
              <div className="nav-link">About</div>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                // navigate("/offers");
              }}
            >
              <div className="nav-link">Donate</div>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                // navigate("/reviews");
              }}
            >
              <div className="nav-link">Membership</div>
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

function NavItem({ route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${route.toLowerCase()}`);
  };
  return (
    <li onClick={handleClick} className="nav-item">
      <span className="nav-link" style={{ cursor: "pointer" }}>
        {route}
      </span>
    </li>
  );
}

export default Navbar;
