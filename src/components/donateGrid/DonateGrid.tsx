import { Grid } from "@mui/material";
import donateImg1 from "../../assets/donate1.png";
import donateImg2 from "../../assets/donate2.png";
import donateImg3 from "../../assets/donate3.png";
import donateImg4 from "../../assets/donate4.png";
import "./donateGrid.css";

const donates = [
  {
    image: donateImg1,
    category: "Kesehatan",
    title: "Biaya operasi katarak",
    description: "Biaya oprasi katarak bagi orang lansia",
    raised: "Rp12.000.000",
    target: "Rp30.000.000",
  },
  {
    image: donateImg2,
    category: "Kesehatan",
    title: "Biaya berobat kanker",
    description: "Biaya upaya penyembuhan kanker paru-paru",
    raised: "Rp68.540.000",
    target: "Rp130.000.000",
  },
  {
    image: donateImg3,
    category: "Sembako",
    title: "Makan siang gratis",
    description: "Berbagi makan siang gratis bagi masyarakat membutuhkan",
    raised: "Rp1.200.000",
    target: "Rp4.500.000",
  },
  {
    image: donateImg4,
    category: "Pendidikan",
    title: "Buku dan alat tulis siswa",
    description: "Keperluan peralatan tulis siswa untuk belajar",
    raised: "Rp39.500.000",
    target: "Rp54.000.000",
  },
];

const DonateGrid = () => {
  return (
    <div className="donate-grid container">
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {donates.map((donate, index) => (
          <DonateCard key={index} {...donate} />
        ))}
      </Grid>
    </div>
  );
};

type TDonateCard = {
  image: string;
  category: string;
  title: string;
  description: string;
  raised: string;
  target: string;
};

function DonateCard({
  image,
  category,
  title,
  description,
  raised,
  target,
}: TDonateCard) {
  return (
    <Grid item xs={12} lg={6} sx={{ my: "10px" }}>
      <div className="donate-card">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="card-image">
            <img src={image} alt="Donate image" />
            <button>Donate now</button>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="card-detail">
            <div>
              <h4>{category}</h4>
              <h3>{title}</h3>
              <p>{description}</p>
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
                    width: "35%",
                  }}
                ></div>
              </div>
              <Grid container spacing={2} sx={{ width: "300px", mt: "10px" }}>
                <Grid item xs={6}>
                  <h6>Terkumpul:</h6>
                  <p className="money-raised">{raised}</p>
                </Grid>
                <Grid item xs={6}>
                  <h6>Target:</h6>
                  <p className="money-raised">{target}</p>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

export default DonateGrid;
