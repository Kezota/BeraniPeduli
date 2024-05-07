import Popup from "../../../components/Popup";
import "../../../styles/donatePopup.css";
import { TextField } from "@mui/material";
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
        <h2>Donasi Kamu</h2>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={amount == 0 ? "" : amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </form>
      </div>
    </Popup>
  );
}
