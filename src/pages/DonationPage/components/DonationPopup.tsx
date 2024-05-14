import Popup from "../../../components/Popup";
import "../../../styles/donatePopup.css";
import { useDonationContext } from "../../../context/DonationContext";

export default function DonationPopup() {
  const { openPopup, onTogglePopup, amount, setAmount } = useDonationContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(amount);
  }

  return (
    <Popup open={openPopup} onClosePopup={onTogglePopup}>
      <div className="donate-popup">
        <h3>Donasi Kamu</h3>
        <hr />
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="amount" className="amount-label">
            Rp
          </label>
          <input
            id="amount"
            type="number"
            value={amount || ""}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </form>
      </div>
    </Popup>
  );
}
