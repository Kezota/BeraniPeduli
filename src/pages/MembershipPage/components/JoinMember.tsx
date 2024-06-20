import "../../../styles/joinMember.css";
import joinMember from "../../../assets/joinMember.png";
import "aos/dist/aos.css";

export default function JoinMember() {
  return (
    <section className="join-member" data-aos="fade-left">
      <div
        className="join-member-detail"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h3>Bersatu dalam Keberanian dan Mewujudkan Kebaikan</h3>
        <p>
          Dengan mendaftar sebagai member BeraniPeduli, Anda akan menjadi bagian
          dari jaringan orang-orang inspiratif yang memiliki semangat dan
          dedikasi yang sama dalam menyebarkan kebaikan.{" "}
        </p>
        <p>
          Mari bergabung dengan membership Berani Peduli dan bersama-sama kita
          bisa membuat perbedaan yang berarti!
        </p>
        <a href="#joinMember">Join Member</a>
      </div>
      <div className="image">
        <img src={joinMember} alt="Join Member Image" />
      </div>
    </section>
  );
}
