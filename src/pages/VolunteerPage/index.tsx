import NavbarFill from "../../components/navbarFill/NavbarFill";
import Heading from "../../components/heading/Heading";
import headerImage from "./assets/volunteer-header.png";
import "./volunteerPage.css";

export default function VolunteerPage() {
  return (
    <div className="volunteer-page">
      <NavbarFill activeNav="volunteer" />
      <Heading image={headerImage} title="Volunteer Page" />
    </div>
  );
}
