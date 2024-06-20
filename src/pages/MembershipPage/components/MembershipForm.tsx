import { Grid } from "@mui/material";
import { useState } from "react";
import "../../../styles/membershipForm.css";
import { formatCurrency } from "../../../utils";

const radioAmount = [
  {
    id: "radioAmount1",
    value: 100000,
    label: "Rp 100rb",
  },
  {
    id: "radioAmount2",
    value: 200000,
    label: "Rp 200rb",
  },
  {
    id: "radioAmount3",
    value: 500000,
    label: "Rp 500rb",
  },
  {
    id: "radioAmount4",
    value: 1000000,
    label: "Rp 1jt",
  },
  {
    id: "radioAmount5",
    value: 2000000,
    label: "Rp 2jt",
  },
  {
    id: "radioAmount6",
    value: 5000000,
    label: "Rp 5jt",
  },
];

export default function MembershipForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(name, phone, email);
  }

  return (
    <section className="membership-form container">
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
            </Grid>
            <Grid item xs={12} md={4}>
              <label htmlFor="phone">Nomor Telepon</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
        </div>
        <div className="subscription-plan">
          <h3>Pilih Paket Berlangganan Anda</h3>
          <hr />
          <div className="plan-duration">
            <div className="duration">
              <input type="radio" name="subscription" id="weekly" />
              <label htmlFor="weekly">Mingguan</label>
            </div>
            <div className="duration">
              <input type="radio" name="subscription" id="monthly" />
              <label htmlFor="monthly">Bulanan</label>
            </div>
            <div className="duration">
              <input type="radio" name="subscription" id="yearly" />
              <label htmlFor="yearly">Tahunan</label>
            </div>
          </div>
          {/* <div className="radio-amount">
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
          </div> */}
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
          <div className="payment-method">
            <h3>Metode Pembayaran</h3>
            <select>
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
