import { Grid, TextField } from "@mui/material";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Kontak Kami</h2>
      <Grid container spacing={1}>
        <div className="forms">
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
            <div className="form-group">
              <div className="first-last">
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="standard"
                  fullWidth
                  sx={{ fontFamily: "Raleway !important" }}
                ></TextField>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="standard"
                  fullWidth
                ></TextField>
              </div>
              <div className="phone-email">
                <TextField
                  label="Phone"
                  placeholder="Enter phone number"
                  variant="standard"
                  fullWidth
                ></TextField>
                <TextField
                  label="Email"
                  placeholder="Enter email address"
                  variant="standard"
                  fullWidth
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
                />
              </div>
              <button>Kirim Sekarang</button>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Contact;
