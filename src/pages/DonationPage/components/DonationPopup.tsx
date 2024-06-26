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
  const {
    openPopup,
    onTogglePopup,
    selectedDonation,
    setSelectedDonation,
    setDonations,
  } = useDonationContext();

  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    amount: "",
  });

  useEffect(() => {
    if (!openPopup) {
      setAmount(0);
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [openPopup]);

  if (!selectedDonation) return;

  function validateForm() {
    const tempErrors = { name: "", email: "", amount: "" };
    const emailRegex = /\S+@\S+\.\S+/;
    let isValid = true;

    if (!name) {
      tempErrors.name = "Nama tidak boleh kosong";
      isValid = false;
    }
    if (!email || !emailRegex.test(email)) {
      tempErrors.email = "Email tidak valid";
      isValid = false;
    }
    if (amount <= 0) {
      tempErrors.amount = "Jumlah donasi harus lebih dari 0";
      isValid = false;
    }
    // if (!message) {
    //   tempErrors.message = "Pesan tidak boleh kosong";
    //   isValid = false;
    // }

    setErrors(tempErrors);
    return isValid;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateForm()) return;

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
    setEmail("");
    setMessage("");
    onTogglePopup();
    setSelectedDonation(null);
  }

  function handleClosePopup() {
    onTogglePopup();
    setSelectedDonation(null);
  }

  return (
    <Popup onTogglePopup={handleClosePopup}>
      <div className="donate-popup">
        <h3>{selectedDonation?.title}</h3>
        <p>{selectedDonation?.description}</p>
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
            {errors.amount && (
              <span className="error-message">{errors.amount}</span>
            )}
          </div>
          <div className="radio-amount">
            {radioAmount.map((radio) => (
              <span key={radio.id}>
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
          <div className="payment-method">
            <h5>Metode Pembayaran</h5>
            <select>
              <option value="dana">DANA</option>
              <option value="gopay">GoPay</option>
              <option value="ovo">OVO</option>
              <option value="bank">Transfer Bank</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
          <div className="personal-info">
            <h3>Informasi pribadi</h3>
            <hr />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <label htmlFor="name">Nama</label>
                <input
                  id="name"
                  type="text"
                  // placeholder="Nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  // placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  // placeholder="Berikan pesan anda.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {/* {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )} */}
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
