import { useNavigate } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "../styles/footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="sec-container grid">
        <div className="logo-div">
          <div className="footer-logo">
            <a href="#" className="logo flex">
              <h1
                className="flex"
                style={{ color: "rgba(67, 141, 124, 1)", fontWeight: "700" }}
              >
                BeraniPeduli
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

        <div className="links">
          <div className="footer-links">
            <span className="link-title">About</span>
            <li>
              <a onClick={() => navigate("/")}>Home</a>
            </li>
            <li>
              <a onClick={() => navigate("/about")}>Tentang Kami</a>
            </li>
            <li>
              <a onClick={() => navigate("/about")}>Visi & Misi</a>
            </li>
          </div>

          <div className="footer-links">
            <span className="link-title">Services</span>
            <li>
              <a onClick={() => navigate("/donation")}>Donasi</a>
            </li>
            <li>
              <a onClick={() => navigate("/membership")}>Membership</a>
            </li>
            <li>
              <a onClick={() => navigate("/volunteer")}>Volunteer</a>
            </li>
          </div>

          <div className="footer-links">
            <span className="link-title">Support</span>
            <li>
              <a
              // onClick={() => navigate("/reviews")}
              >
                Blog
              </a>
            </li>
            <li>
              <a>Feedback</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </div>

          <div className="footer-links">
            <span className="link-title">Contact Us</span>
            <span className="phone">(123) 456 789</span>
            <span className="email">beranipeduli@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
