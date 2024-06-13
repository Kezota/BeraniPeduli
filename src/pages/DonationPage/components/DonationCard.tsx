import { Grid } from "@mui/material";
import { TDonationCard } from "../../../types/TDonationCard";
import { formatCurrency } from "../../../utils";
import "aos/dist/aos.css";

export default function DonationCard({
  donation,
  onOpenPopup,
  setSelectedDonation,
}: TDonationCard) {
  function handleDonate() {
    onOpenPopup();

    setSelectedDonation(donation);
  }

  return (
    <Grid item xs={12} lg={6} sx={{ my: "10px" }}>
      <div className="donate-card" data-aos="fade-up">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="card-image">
            <img src={donation.image} alt="Donate image" />
            <button onClick={handleDonate}>Donasi sekarang</button>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="card-detail">
            <div>
              <h4>{donation.category}</h4>
              <h3>{donation.title}</h3>
              <p>{donation.description}</p>
              <div
                className="progress"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "270px", marginTop: "10px" }}
              >
                <div
                  className="progress-bar"
                  style={{
                    backgroundColor: "#FFC701",
                    width: `${(donation.raised / donation.target) * 100}%`,
                  }}
                ></div>
              </div>
              <Grid container spacing={2} sx={{ width: "300px", mt: "10px" }}>
                <Grid item xs={6}>
                  <h6>Terkumpul:</h6>
                  <p className="money-raised">
                    {formatCurrency(donation.raised)}
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <h6>Target:</h6>
                  <p className="money-raised">
                    {formatCurrency(donation.target)}
                  </p>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
