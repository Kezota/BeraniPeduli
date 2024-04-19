import { useNavigate } from "react-router-dom";
import "../../../styles/choose.css";

const Choose = () => {
  const navigate = useNavigate();

  return (
    <div className="choose">
      <p>Membangun dunia yang lebih baik untuk semua orang</p>
      <div className="buttons">
        <button className="membership" onClick={() => navigate("/membership")}>
          Membership
        </button>
        <button className="volunteer" onClick={() => navigate("/volunteer")}>
          Volunteer
        </button>
        <span>Or</span>
      </div>
    </div>
  );
};

export default Choose;
