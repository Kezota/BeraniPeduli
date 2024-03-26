import NavbarFill from "../../components/navbarFill/NavbarFill";
import Heading from "../../components/heading/Heading";
import headerImage from "../../assets/about-header.png";
import "./aboutPage.css";
import Vision from "./components/vision/Vision";
import Mission from "./components/mission/Mission";
import Achievements from "../../components/achievements/Achievements";
import Footer from "../../components/footer/Footer";

export default function AboutPage() {
  return (
    <div className="about-page">
      <NavbarFill activeNav="about" />
      <Heading image={headerImage} title="About Page" />
      <div className="container">
        <Vision />
        <Mission />
      </div>
      <Achievements />
      <Footer />
    </div>
  );
}