import DonateGrid from "../components/donateGrid/DonateGrid";
import NavbarFill from "../components/navbarFill/NavbarFill";
import "../styles/donatePage.css";

const DonatePage = () => {
  return (
    <div className="donate-page">
      <NavbarFill />
      <div className="heading">
        <div className="sec-title">
          <div>
            <h1 className="title">Donate Page</h1>
            <p>
              Bersama BeraniPeduli, mari kita memberikan bantuan kepada mereka
              yang membutuhkan!
            </p>
          </div>
        </div>
      </div>
      <DonateGrid />
    </div>
  );
};

export default DonatePage;
