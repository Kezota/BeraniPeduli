import { useState } from "react";
import "./navbarFill.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const NavbarFill = ({ activeNav }: { activeNav: string }) => {
  const navigate = useNavigate();

  // code to toggle/show navbar;
  const [active, setActive] = useState("navbar-fill");
  const showNav = () => {
    setActive("navbar-fill active-navbar-fill");
  };

  // code to remove navbar
  const removeNav = () => {
    setActive("navbar-fill");
  };

  return (
    <section className="navbar-fill-section">
      <div className={"header"}>
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
              className={`nav-item ${activeNav === "home" && "active-nav"}`}
              onClick={() => {
                navigate("/");
              }}
            >
              <div
                className="nav-link"
                style={
                  activeNav === "home"
                    ? { color: "#438D7C", fontWeight: 700 }
                    : {}
                }
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
              <div
                className="nav-link"
                style={
                  activeNav === "about"
                    ? { color: "#438D7C", fontWeight: 700 }
                    : {}
                }
              >
                About
              </div>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                navigate("/donate");
              }}
            >
              <div
                className="nav-link"
                style={
                  activeNav === "donate"
                    ? { color: "#438D7C", fontWeight: 700 }
                    : {}
                }
              >
                Donate
              </div>
            </li>
            <li
              className={`nav-item ${
                activeNav === "membership" && "active-nav"
              }`}
              onClick={() => {
                navigate("/membership");
              }}
            >
              <div
                className="nav-link"
                style={
                  activeNav === "membership"
                    ? { color: "#438D7C", fontWeight: 700 }
                    : {}
                }
              >
                Membership
              </div>
            </li>
          </ul>
          <div onClick={removeNav} className="close-navbar-fill">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggle-navbar-fill">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default NavbarFill;
