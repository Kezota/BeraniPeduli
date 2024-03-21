import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import "../styles/homePage.css";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};
