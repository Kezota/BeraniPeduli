import { useNavigate } from "react-router-dom";

import category1 from "../../../assets/category1.png";
import category2 from "../../../assets/category2.png";
import category3 from "../../../assets/category3.png";
import category4 from "../../../assets/category4.png";
import "../../../styles/donationCategory.css";
import "aos/dist/aos.css";

const DonationCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="donation-category">
      <h2>Telusuri Kategori Donasi</h2>
      <div className="category-list">
        <div className="category-card" data-aos="fade-up">
          <img src={category1} alt="donation" />
        </div>
        <div className="category-card" data-aos="fade-up" data-aos-delay="100">
          <img src={category2} alt="donation" />
        </div>
        <div className="category-card" data-aos="fade-up" data-aos-delay="200">
          <img src={category3} alt="donation" />
        </div>
        <div className="category-card" data-aos="fade-up" data-aos-delay="300">
          <img src={category4} alt="donation" />
        </div>
      </div>
      <button className="btn" onClick={() => navigate("/donation")}>
        Lihat Donasi
      </button>
    </div>
  );
};

export default DonationCategory;
