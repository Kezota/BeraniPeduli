import introductionImage from "../../../assets/volunteer-introduction.png";
import "../../../styles/volunteerIntroduction.css";

export default function VolunteerIntroduction() {
  return (
    <section className="container volunteer-introduction">
      <div className="introduction">
        <div className="left">
          <h4>Volunteer</h4>
          <h3>Siapkan dirimu untuk menjadi relawan</h3>
          <p>
            Selamat datang di halaman volunteer BeraniPeduli! Kami mengundang
            Anda untuk bergabung dengan kami dalam membantu sesama. Di
            Beranipeduli, setiap kontribusi, besar atau kecil, sangat berarti.
            Jadilah bagian dari komunitas penuh kasih dan dedikasi, bertemu
            orang-orang inspiratif, dan buat perubahan nyata. Bersama, kita bisa
            menciptakan dunia yang lebih baik. Isi formulir pendaftaran
            volunteer di bawah ini dan mari berbuat baik bersama. Bersama kita
            peduli, bersama kita berani!
          </p>
          <a id="link" href="#join-now">
            Ikuti Sekarang
          </a>
        </div>
        <div className="right">
          <img src={introductionImage} alt="" />
        </div>
      </div>
    </section>
  );
}
