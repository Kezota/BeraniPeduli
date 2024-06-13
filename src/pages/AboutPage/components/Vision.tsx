import "../../../styles/vision.css";
import visionImage from "../../../assets/visi.png";
import "aos/dist/aos.css";

const Vision = () => {
  return (
    <div className="vision">
      <div className="image" data-aos="fade-right">
        <img src={visionImage} alt="" />
      </div>
      <div className="vision-detail" data-aos="fade-right" data-aos-delay="200">
        <h4>Visi Kami</h4>
        <h3>Membawa Harapan, Menciptakan Perubahan</h3>
        <p>
          Menciptakan dunia di mana setiap individu memiliki akses terhadap
          bantuan yang mereka butuhkan, serta kesempatan untuk membangun
          kehidupan yang lebih baik. Kami percaya bahwa dengan kerjasama dan
          kepedulian, kita dapat membawa perubahan positif yang berkelanjutan
          bagi masyarakat yang membutuhkan
        </p>
      </div>
    </div>
  );
};

export default Vision;
