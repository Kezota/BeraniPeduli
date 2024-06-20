import { Grid } from "@mui/material";
import { useState } from "react";
import "../../../styles/membershipForm.css";
import { formatCurrency } from "../../../utils";

export default function MembershipForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [duration, setDuration] = useState("weekly");
  const [paymentMethod, setPaymentMethod] = useState("dana");

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
  });

  function validate() {
    let tempErrors = { name: "", phone: "", email: "", amount: "" };
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      tempErrors.name = "Name is required";
    }

    if (!phone) {
      formIsValid = false;
      tempErrors.phone = "Phone number is required";
    }

    if (!email) {
      formIsValid = false;
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      tempErrors.email = "Email is not valid";
    }

    if (!amount) {
      formIsValid = false;
      tempErrors.amount = "Amount is required";
    }

    setErrors(tempErrors);
    return formIsValid;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validate()) {
      alert("Terima kasih telah mendaftar sebagai member kami!");

      setName("");
      setPhone("");
      setEmail("");
      setAmount(0);
      setDuration("weekly");
      setPaymentMethod("dana");
    }
  }

  return (
    <section className="membership-form container" id="joinMember">
      <h2>Daftar Membership</h2>
      <p>
        Dengan menjadi member, Anda turut berperan aktif dalam gerakan
        kemanusiaan yang nyata dan berkelanjutan, memastikan bahwa bantuan dapat
        terus diberikan kepada mereka yang membutuhkan.{" "}
      </p>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="personal-data">
          <h3>Data pribadi</h3>
          <hr />
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <label htmlFor="name">Nama Lengkap</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <label htmlFor="phone">Nomor Telepon</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && (
                <div className="error-message">{errors.phone}</div>
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </Grid>
          </Grid>
        </div>
        <div className="subscription-plan">
          <h3>Pilih Paket Berlangganan Anda</h3>
          <hr />
          <div className="plan-duration">
            <div className="duration">
              <input
                type="radio"
                name="subscription"
                id="weekly"
                value="weekly"
                checked={duration === "weekly"}
                onChange={(e) => setDuration(e.target.value)}
              />
              <label htmlFor="weekly">Mingguan</label>
            </div>
            <div className="duration">
              <input
                type="radio"
                name="subscription"
                id="monthly"
                value="monthly"
                checked={duration === "monthly"}
                onChange={(e) => setDuration(e.target.value)}
              />
              <label htmlFor="monthly">Bulanan</label>
            </div>
            <div className="duration">
              <input
                type="radio"
                name="subscription"
                id="yearly"
                value="yearly"
                checked={duration === "yearly"}
                onChange={(e) => setDuration(e.target.value)}
              />
              <label htmlFor="yearly">Tahunan</label>
            </div>
          </div>
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
              <div className="error-message">{errors.amount}</div>
            )}
          </div>
          <div className="payment-method">
            <h3>Metode Pembayaran</h3>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="dana">DANA</option>
              <option value="gopay">GoPay</option>
              <option value="ovo">OVO</option>
              <option value="bank">Transfer Bank</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
        </div>
        <h3 className="donation-total">
          Total Pembayaran: <span>{formatCurrency(amount)}</span>
        </h3>
        <div className="join-member-container">
          <button>Join Member</button>
        </div>
      </form>
    </section>
  );
}
