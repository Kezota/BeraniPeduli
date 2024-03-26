import NavbarFill from "../../components/navbarFill/NavbarFill";
import Heading from "../../components/heading/Heading";
import headerImage from "../../assets/about-header.png";
import "./aboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <NavbarFill activeNav="about" />
      <Heading image={headerImage} title="About Page" />
    </div>
  );
}
