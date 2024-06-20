import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import NavbarFill from "../../components/NavbarFill";
import Heading from "../../components/Heading";
import MembershipForm from "./components/MembershipForm";
import Footer from "../../components/Footer";

import headerImage from "../../assets/membership-header.png";
import "../../styles/membershipPage.css";
import WhyMember from "./components/WhyMember";
import JoinMember from "./components/JoinMember";

export default function MembershipPage() {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="membership-page">
      <NavbarFill activeNav="membership" />
      <Heading
        image={headerImage}
        title="Membership Page"
        description="Bergabunglah dengan membership Beranipeduli dan jadilah bagian dari komunitas peduli yang lebih besar!"
      />
      <WhyMember />
      <JoinMember />
      <MembershipForm />
      <Footer />
    </div>
  );
}
