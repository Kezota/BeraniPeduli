import DonateGrid from "../components/donateGrid/DonateGrid";
import Navbar from "../components/navbar/Navbar";
import "../styles/donatePage.css";

const DonatePage = () => {
  return (
    <div className="donate-page">
      <Navbar />
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
