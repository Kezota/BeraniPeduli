import { useEffect } from "react";

import NavbarFill from "../../components/NavbarFill";
import Heading from "../../components/Heading";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Achievements from "../../components/Achievements";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Footer from "../../components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import headerImage from "../../assets/about-header.png";
import "../../styles/aboutPage.css";

export default function AboutPage() {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="about-page">
      <NavbarFill activeNav="about" />
      <Heading image={headerImage} title="About Page" />
      <div className="container">
        <Vision />
        <Mission />
      </div>
      <Achievements />
      <div className="container">
        <Features />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}
