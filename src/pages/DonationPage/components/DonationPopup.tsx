import Popup from "../../../components/Popup";
import "../../../styles/donatePopup.css";
import { useDonationContext } from "../../../context/DonationContext";

export default function DonationPopup() {
  const {
    openPopup,
    onTogglePopup,
    amount,
    setAmount,
    selectedDonation,
    setDonations,
  } = useDonationContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setDonations((prev) => {
      const updatedDonations = prev.map((donation) => {
        if (donation.title === selectedDonation!.title) {
          return {
            ...donation,
            raised: donation.raised + amount,
          };
        } else return donation;
      });

      return updatedDonations;
    });

    setAmount(0);
    onTogglePopup();
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
