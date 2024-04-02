import { useNavigate } from "react-router-dom";

import category1 from "../../assets/category1.png";
import category2 from "../../assets/category2.png";
import category3 from "../../assets/category3.png";
import category4 from "../../assets/category4.png";
import "./donationCategory.css";

const DonationCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="donation-category">
      <h2>Telusuri Kategori Donasi</h2>
      <div className="category-list">
        <CategoryCard image={category1} />
        <CategoryCard image={category2} />
        <CategoryCard image={category3} />
        <CategoryCard image={category4} />
      </div>
      <button className="btn" onClick={() => navigate("/donate")}>
        Lihat Donasi
      </button>
    </div>
  );
};

function CategoryCard({ image }: { image: string }) {
  return (
    <div className="category-card">
      <img src={image} alt="donation" />
    </div>
  );
}

export default DonationCategory;
