import Navbar from "../../components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Goal from "./components/goal/Goal";
import Achievements from "../../components/achievements/Achievements";
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
      <Footer />
    </div>
  );
};

export default HomePage;
