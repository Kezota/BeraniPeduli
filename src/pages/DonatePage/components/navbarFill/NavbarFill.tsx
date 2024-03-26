import { useState } from "react";
import "./navbarFill.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";

const NavbarFill = () => {
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

  return (
    <section className="navbar-section">
      <div className={"header "}>
        <div
          className="logo-div"
          onClick={() => {
            // navigate("/home");
          }}
        >
          <div className="logo" style={{ color: "#438D7C", cursor: "pointer" }}>
            BeraniPeduli
          </div>
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

export default NavbarFill;
