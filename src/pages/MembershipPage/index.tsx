import NavbarFill from "../../components/navbarFill/NavbarFill";
import Heading from "../../components/heading/Heading";
import headerImage from "./assets/membership-header.png";
import "./membershipPage.css";

export default function MembershipPage() {
  return (
    <div className="membership-page">
      <NavbarFill activeNav="membership" />
      <Heading image={headerImage} title="Membership Page" />
    </div>
  );
}
