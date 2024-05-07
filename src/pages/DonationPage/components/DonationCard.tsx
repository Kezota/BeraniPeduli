import { Grid } from "@mui/material";
import { TDonationCard } from "../../../types/TDonationCard";
import { formatCurrency } from "../../../utils";

export default function DonationCard({ donate, onOpenPopup }: TDonationCard) {
  return (
    <Grid item xs={12} lg={6} sx={{ my: "10px" }}>
      <div className="donate-card">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="card-image">
            <img src={donate.image} alt="Donate image" />
            <button onClick={onOpenPopup}>Donate now</button>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="card-detail">
            <div>
              <h4>{donate.category}</h4>
              <h3>{donate.title}</h3>
              <p>{donate.description}</p>
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
                    width: `${(donate.raised / donate.target) * 100}%`,
                  }}
                ></div>
              </div>
              <Grid container spacing={2} sx={{ width: "300px", mt: "10px" }}>
                <Grid item xs={6}>
                  <h6>Terkumpul:</h6>
                  <p className="money-raised">
                    {formatCurrency(donate.raised)}
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <h6>Target:</h6>
                  <p className="money-raised">
                    {formatCurrency(donate.target)}
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
