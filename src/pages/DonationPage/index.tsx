import { useEffect } from "react";

import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
import Header from "./components/Header";
import DonationGrid from "./components/DonationGrid";
import NavbarFill from "../../components/NavbarFill";
import DonationPopup from "./components/DonationPopup";
import { DonationProvider } from "../../context/DonationContext";
import AddDonation from "./components/AddDonation";

import Aos from "aos";
import "aos/dist/aos.css";
import headerImage from "../../assets/donate-header.png";
import "../../styles/donatePage.css";

const DonatePage = () => {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <DonationProvider>
      <div className="donate-page">
        <NavbarFill activeNav="donation" />
        <Heading image={headerImage} title="Donation Page" />
        <div className="container">
          <AddDonation />
          <DonationPopup />
          <Header />
          <DonationGrid />
        </div>
        <Footer />
      </div>
    </DonationProvider>
  );
};

export default DonatePage;
