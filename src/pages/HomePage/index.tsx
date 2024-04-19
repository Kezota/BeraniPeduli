import { useEffect } from "react";

import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import Goal from "./components/Goal";
import Achievements from "../../components/Achievements";
import Donations from "./components/DonationCategory";
import OurEvents from "./components/OurEvents";
import Choose from "./components/Choose";
import Contact from "./components/Contact";
import Footer from "../../components/Footer";

import "../../styles/homePage.css";

const HomePage = () => {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Goal />
      </div>
      <Achievements />
      <div className="container">
        <Donations />
      </div>
      <Choose />
      <div className="container">
        <OurEvents />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
