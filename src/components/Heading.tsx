import "../styles/heading.css";

export default function Heading({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="heading"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${image}) center center / cover no-repeat`,
      }}
    >
      <div className="sec-title">
        <div>
          <h1 className="title">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
