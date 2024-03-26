import Heading from "../../components/heading/Heading";
import Footer from "../../components/footer/Footer";
import DonateGrid from "./components/donateGrid/DonateGrid";
import NavbarFill from "./components/navbarFill/NavbarFill";
import headerImage from "../../assets/donate-header.png";
import "./donatePage.css";

const DonatePage = () => {
  return (
    <div className="donate-page">
      <NavbarFill />
      <Heading image={headerImage} title="Donation Page" />
      <DonateGrid />
      <Footer />
    </div>
  );
};

export default DonatePage;