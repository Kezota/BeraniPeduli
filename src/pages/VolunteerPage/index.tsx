import { useEffect } from "react";

import NavbarFill from "../../components/navbarFill/NavbarFill";
import Heading from "../../components/heading/Heading";

import headerImage from "./assets/volunteer-header.png";
import "./volunteerPage.css";

export default function VolunteerPage() {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="volunteer-page">
      <NavbarFill activeNav="volunteer" />
      <Heading image={headerImage} title="Volunteer Page" />
    </div>
  );
}
