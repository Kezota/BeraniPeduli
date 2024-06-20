import sponsor1 from "../../../assets/sponsor1.png";
import sponsor2 from "../../../assets/sponsor2.png";
import sponsor3 from "../../../assets/sponsor3.png";
import sponsor4 from "../../../assets/sponsor4.png";
import sponsor5 from "../../../assets/sponsor5.png";
import sponsor6 from "../../../assets/sponsor6.png";
import sponsor7 from "../../../assets/sponsor7.png";
import sponsor8 from "../../../assets/sponsor8.png";
import "../../../styles/sponsors.css";

export default function Sponsors() {
  return (
    <section className="sponsors container">
      <h2>Sponsor Kami</h2>
      <div className="sponsor">
        <img src={sponsor1} alt="Sponsor Image" />
        <img src={sponsor2} alt="Sponsor Image" />
        <img src={sponsor3} alt="Sponsor Image" />
        <img src={sponsor4} alt="Sponsor Image" />
        <img src={sponsor5} alt="Sponsor Image" />
        <img src={sponsor6} alt="Sponsor Image" />
        <img src={sponsor7} alt="Sponsor Image" />
        <img src={sponsor8} alt="Sponsor Image" />
      </div>
    </section>
  );
}
