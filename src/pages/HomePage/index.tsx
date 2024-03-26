import Achievements from "./components/achievements/Achievements";
import Goal from "./components/goal/Goal";
import Hero from "./components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import "./homePage.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Goal />
      <Achievements />
    </div>
  );
};

export default HomePage;
