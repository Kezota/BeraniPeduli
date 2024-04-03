import { useEffect } from "react";

import NavbarFill from "../../components/navbarFill/NavbarFill";
import Heading from "../../components/heading/Heading";

import headerImage from "./assets/membership-header.png";
import "./membershipPage.css";

export default function MembershipPage() {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="membership-page">
      <NavbarFill activeNav="membership" />
      <Heading image={headerImage} title="Membership Page" />
    </div>
  );
}
