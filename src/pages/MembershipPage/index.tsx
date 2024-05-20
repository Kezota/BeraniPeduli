import { useEffect } from "react";

import NavbarFill from "../../components/NavbarFill";
import Heading from "../../components/Heading";
import MembershipForm from "./components/MembershipForm";

import headerImage from "../../assets/membership-header.png";
import "../../styles/membershipPage.css";

export default function MembershipPage() {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="membership-page">
      <NavbarFill activeNav="membership" />
      <Heading image={headerImage} title="Membership Page" />
      <MembershipForm />
    </div>
  );
}
