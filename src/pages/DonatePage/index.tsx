import Heading from "../../components/heading/Heading";
import Footer from "../../components/footer/Footer";
import Header from "./components/header/Header";
import DonateGrid from "./components/donateGrid/DonateGrid";
import NavbarFill from "../../components/navbarFill/NavbarFill";
import headerImage from "./assets/donate-header.png";
import "./donatePage.css";

const DonatePage = () => {
  return (
    <div className="donate-page">
      <NavbarFill activeNav="donate" />
      <Heading image={headerImage} title="Donation Page" />
      <div className="container">
        <Header />
        <DonateGrid />
      </div>
      <Footer />
    </div>
  );
};

export default DonatePage;
