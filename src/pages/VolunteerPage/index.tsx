import { useEffect } from "react";

import NavbarFill from "../../components/NavbarFill";
import Heading from "../../components/Heading";
import VolunteerIntroduction from "./components/VolunteerIntroduction";
import UpcomingEvents from "./components/UpcomingEvents";

import headerImage from "../../assets/volunteer-header.png";
import "../../styles/volunteerPage.css";
import NewestEvent from "./components/NewestEvent";
import Footer from "../../components/Footer";
import Sponsors from "./components/Sponsors";

export default function VolunteerPage() {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="volunteer-page">
      <NavbarFill activeNav="volunteer" />
      <Heading
        image={headerImage}
        title="Volunteer Page"
        description="Bergabunglah sebagai Volunteer dan Sebarkan Kebaikan Bersama Beranipeduli!"
      />
      <VolunteerIntroduction />
      <UpcomingEvents />
      <NewestEvent />
      <Sponsors />
      <Footer />
    </div>
  );
}
