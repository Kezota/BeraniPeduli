import { Grid, TextField } from "@mui/material";
import "../../../styles/contact.css";
import { useState } from "react";
import "aos/dist/aos.css";

const Contact = () => {
  const [fistName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    alert("Pesan berhasil terkirim");

    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact">
      <h2>Kontak Kami</h2>
      <Grid container spacing={1}>
        <div className="forms" data-aos="fade-up">
          <Grid item xs={12} md={5}>
            <div className="left-side">
              <h3>Informasi Kontak</h3>
              <p>
                Ada pertanyaan atau masukan? Biarkan kami tahu dengan mengirim
                pesan pada informasi kontak di sini. Kami senang untuk mendengar
                dari Anda!
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="first-last">
                  <TextField
                    label="First Name"
                    placeholder="Enter first name"
                    variant="standard"
                    fullWidth
                    onChange={(e) => setFirstName(e.target.value)}
                  ></TextField>
                  <TextField
                    label="Last Name"
                    placeholder="Enter last name"
                    variant="standard"
                    fullWidth
                    onChange={(e) => setLastName(e.target.value)}
                  ></TextField>
                </div>
                <div className="phone-email">
                  <TextField
                    label="Phone"
                    placeholder="Enter phone number"
                    variant="standard"
                    fullWidth
                    onChange={(e) => setPhone(e.target.value)}
                  ></TextField>
                  <TextField
                    label="Email"
                    placeholder="Enter email address"
                    variant="standard"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                  ></TextField>
                </div>
                <div className="message">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Message"
                    multiline
                    maxRows={4}
                    fullWidth
                    variant="standard"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button onClick={handleSubmit}>Kirim Sekarang</button>
              </div>
            </form>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Contact;
