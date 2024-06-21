import "../../../styles/upcomingEvents.css";
import event1 from "../../../assets/event1.png";
import event2 from "../../../assets/event2.png";
import event3 from "../../../assets/event3.png";
import event4 from "../../../assets/event4.png";
import event5 from "../../../assets/event5.png";
import event6 from "../../../assets/event6.png";
import "aos/dist/aos.css";

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <h4>Acara Kami</h4>
      <h2>Acara Mendatang Kami</h2>
      <p>
        Ikutilah acara mendatang kami yang bertujuan membangun komunitas dan
        menyebarkan semangat kebaikan.
      </p>
      <div className="event-list">
        <EventCard
          image={event1}
          day={23}
          month="Juni"
          location="Tanjung Duren Utara, Jakarta"
          title="Berbagi Makanan Gratis"
        />
        <EventCard
          image={event2}
          day={29}
          month="Juni"
          location="Pantai Kutai, Bali"
          title="Membersihkan Pantai"
        />
        <EventCard
          image={event3}
          day={4}
          month="Juli"
          location="Kepulauan Yapen, Papua"
          title="Mengajar ke Sekolah"
        />
      </div>
      <div className="event-list">
        <EventCard
          image={event4}
          day={8}
          month="Juli"
          location="Bintaro, Tangerang"
          title="Makanan untuk Anak Panti"
        />
        <EventCard
          image={event5}
          day={15}
          month="Juli"
          location="Pekalongan, Jawa Tengah"
          title="Berbagi Sembako"
        />
        <EventCard
          image={event6}
          day={26}
          month="Juli"
          location="Srengseng, Jakarta Barat"
          title="Membersihkan Hutan"
        />
      </div>
    </div>
  );
};

function EventCard({
  image,
  day,
  month,
  location,
  title,
}: {
  image: string;
  day: number;
  month: string;
  location: string;
  title: string;
}) {
  function handleClick() {
    alert("Relawan acara ini sudah penuh!");
  }

  return (
    <div className="event-card" id="join-now" data-aos="fade-up">
      <img src={image} alt="event image" />
      <div className="date">
        <span className="day">{day}</span>
        <span className="month">{month}</span>
      </div>
      <div className="card-detail">
        <div className="location">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_3_637"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_3_637)">
              <path
                d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                fill="#FFB23F"
              />
            </g>
          </svg>
          <span>{location}</span>
        </div>
        <h5 className="title">{title}</h5>
        <h4 onClick={handleClick}>Daftar Sekarang →</h4>
      </div>
    </div>
  );
}

export default UpcomingEvents;
