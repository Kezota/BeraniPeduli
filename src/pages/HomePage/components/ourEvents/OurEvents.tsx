import "./ourEvents.css";

const OurEvents = () => {
  return (
    <div className="our-events">
      <h4>Acara Kami</h4>
      <h2>Acara Terbaru Kami</h2>
      <p>
        Bergabunglah dalam acara terbaru kami yang membangun komunitas dan
        menyebarkan semangat kebaikan.
      </p>
      <div className="event-list">
        <EventCard
          day={18}
          month="Maret"
          location="Tanjung Duren Utara, Jakarta"
          title="Berbagi Sembako Gratis"
        />
      </div>
    </div>
  );
};

function EventCard({
  day,
  month,
  location,
  title,
}: {
  day: number;
  month: string;
  location: string;
  title: string;
}) {
  return (
    <div className="event-card">
      <div className="date">
        <span className="day">{day}</span>
        <span className="month">{month}</span>
      </div>
      <p className="card-detail">
        <div className="location">{location}</div>
        <h5 className="title">{title}</h5>
        <h4>Lihat Acara →</h4>
      </p>
    </div>
  );
}

export default OurEvents;
