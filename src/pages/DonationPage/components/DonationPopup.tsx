import Popup from "../../../components/Popup";
import "../../../styles/donatePopup.css";
import { useDonationContext } from "../../../context/DonationContext";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { formatCurrency } from "../../../utils";

const radioAmount = [
  {
    id: "radioAmount1",
    value: 50000,
    label: "Rp 50rb",
  },
  {
    id: "radioAmount2",
    value: 100000,
    label: "Rp 100rb",
  },
  {
    id: "radioAmount3",
    value: 200000,
    label: "Rp 200rb",
  },
  {
    id: "radioAmount4",
    value: 500000,
    label: "Rp 500rb",
  },
  {
    id: "radioAmount5",
    value: 1000000,
    label: "Rp 1jt",
  },
];

export default function DonationPopup() {
  const { openPopup, onTogglePopup, selectedDonation, setDonations } =
    useDonationContext();

  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(amount, name, phone, email, message);

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
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    onTogglePopup();
  }

  useEffect(() => {
    if (!openPopup) {
      setAmount(0);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    }
  }, [openPopup]);

  return (
    <Popup open={openPopup} onClosePopup={onTogglePopup}>
      <div className="donate-popup">
        <h3>{selectedDonation?.title}</h3>
        {/* <hr /> */}
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className="amount">
            <label htmlFor="amount" className="amount-label">
              Rp
            </label>
            <input
              id="amount"
              type="number"
              value={amount || ""}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <label
              htmlFor="amount"
              className="custom-amount"
              onClick={() => setAmount(0)}
            >
              Custom Amount
            </label>
          </div>
          <div className="radio-amount">
            {radioAmount.map((radio) => (
              <span>
                <input
                  type="radio"
                  name="radioAmount"
                  value={radio.value}
                  id={radio.id}
                  checked={amount === radio.value}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <label htmlFor={radio.id}>{radio.label}</label>
              </span>
            ))}
          </div>

          {/* <h3>Metode Pembayaran</h3>
          <div className="payment-method">
            <span>
              <input type="radio" name="paymentMethod" id="paymentMethod1" />
              <label htmlFor="paymentMethod1">Bank</label>
            </span>
            <span>
              <input type="radio" name="paymentMethod" id="paymentMethod2" />
              <label htmlFor="paymentMethod2">OVO</label>
            </span>
            <span>
              <input type="radio" name="paymentMethod" id="paymentMethod3" />
              <label htmlFor="paymentMethod3">Gopay</label>
            </span>
            <span>
              <input type="radio" name="paymentMethod" id="paymentMethod4" />
              <label htmlFor="paymentMethod4">DANA</label>
            </span>
          </div> */}

          <div className="personal-info">
            <h3>Informasi pribadi</h3>
            <hr />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <label htmlFor="name">Nama</label>
                <input
                  id="name"
                  type="text"
                  // placeholder="Nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="phone">Nomor Telepon</label>
                <input
                  id="phone"
                  type="tel"
                  // placeholder="Nomor Telepon"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  // placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  // placeholder="Tinggalkan pesan anda.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
            </Grid>
          </div>

          <h3 className="donation-total">
            Total Donasi: <span>{formatCurrency(amount)}</span>
          </h3>

          <div className="donate-now-container">
            <button className="donate-now">Donasi sekarang</button>
          </div>
        </form>
      </div>
    </Popup>
  );
}
