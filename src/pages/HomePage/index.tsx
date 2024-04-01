import Navbar from "../../components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Goal from "./components/goal/Goal";
import Achievements from "../../components/achievements/Achievements";
import Donations from "./components/donations/DonationCategory";
import OurEvents from "./components/ourEvents/OurEvents";
import Choose from "./components/choose/Choose";
import Footer from "../../components/footer/Footer";
import "./homePage.css";

const HomePage = () => {
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
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
