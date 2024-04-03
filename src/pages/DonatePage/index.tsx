import { useState, useEffect } from "react";

import Heading from "../../components/heading/Heading";
import Footer from "../../components/footer/Footer";
import Header from "./components/header/Header";
import DonateGrid from "./components/donateGrid/DonateGrid";
import NavbarFill from "../../components/navbarFill/NavbarFill";

import headerImage from "./assets/donate-header.png";
import "./donatePage.css";

export type TCategory =
  | "Pendidikan"
  | "Kesehatan"
  | "Hunian Layak"
  | "Sembako"
  | "None";

const DonatePage = () => {
  const [category, setCategory] = useState<TCategory | null>(null);
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");

  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="donate-page">
      <NavbarFill activeNav="donate" />
      <Heading image={headerImage} title="Donation Page" />
      <div className="container">
        <Header
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          search={search}
          setSearch={setSearch}
        />
        <DonateGrid category={category} sort={sort} search={search} />
      </div>
      <Footer />
    </div>
  );
};

export default DonatePage;
