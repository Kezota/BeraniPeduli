import "./footer.css";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
// import { SiYourtraveldottv } from "react-icons/si";
// import { useNavigate } from "react-router-dom";

const Footer = () => {
  // const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="sec-container container grid">
        <div className="logo-div">
          <div className="footer-logo">
            <a href="#" className="logo flex">
              <h1 className="flex" style={{ color: "#213555" }}>
                Harmony Manor
              </h1>
            </a>
          </div>
          <div className="socials flex">
            <ImFacebook
              className="icon"
              onClick={() => {
                window.location.href =
                  "https://www.facebook.com/profile.php?id=61554514212774";
              }}
            />
            <BsTwitter
              className="icon"
              onClick={() => {
                window.location.href =
                  "https://x.com/Harmonymanor_?t=a-Dkk7cGmWIeMpueQ-l8lA&s=08";
              }}
            />
            <AiFillInstagram
              className="icon"
              onClick={() => {
                window.location.href =
                  "https://www.instagram.com/harmonymanor_/";
              }}
            />
          </div>
        </div>

        <div className="footer-links">
          <span className="link-title">About</span>
          <li>
            <a
              // onClick={() => navigate("/home")}
              style={{ cursor: "pointer" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              // onClick={() => navigate("/offers")}
              style={{ cursor: "pointer" }}
            >
              Room Types
            </a>
          </li>
          <li>
            <a
              // onClick={() => navigate("/reservation")}
              style={{ cursor: "pointer" }}
            >
              Book
            </a>
          </li>
          <li>
            <a
              // onClick={() => navigate("/about")}
              style={{ cursor: "pointer" }}
            >
              About Us
            </a>
          </li>
        </div>

        <div className="footer-links">
          <span className="link-title">Hotel</span>
          <li>
            <a
              // onClick={() => navigate("/reviews")}
              style={{ cursor: "pointer" }}
            >
              Why HM?
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/afif_syaiff/">Partner With Us</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </div>

        <div className="footer-links">
          <span className="link-title">Contact Us</span>
          <span className="phone">+62 823 1151 1720</span>
          <span className="email">harmonymanor.contact@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
