import { Grid } from "@mui/material";
import { formatCurrency } from "../../../../utils";

import donateImg1 from "../../assets/donate1.png";
import donateImg2 from "../../assets/donate2.png";
import donateImg3 from "../../assets/donate3.png";
import donateImg4 from "../../assets/donate4.png";
import donateImg5 from "../../assets/donate5.png";
import donateImg6 from "../../assets/donate6.png";
import donateImg7 from "../../assets/donate7.png";
import donateImg8 from "../../assets/donate8.png";
import bmw from "../../assets/bmw.jpg";
import pengungsi from "../../assets/pengungsi.jpg";
import "./donateGrid.css";

const donates = [
  {
    image: bmw,
    category: "Sembako",
    title: "Mobil bmw untuk Kezia",
    description: "Bantuan biaya mobil bmw untuk masyarakat yang membutuhkan",
    raised: 1000,
    target: 999000000,
  },
  {
    image: pengungsi,
    category: "Hunian Layak",
    title: "Rumah bagi pengungsi",
    description: "Biaya pembangunan rumah bagi pengungsi rohingya",
    raised: 5000000,
    target: 100000000,
  },
  {
    image: donateImg1,
    category: "Kesehatan",
    title: "Biaya operasi katarak",
    description: "Biaya oprasi katarak bagi orang lansia",
    raised: 12000000,
    target: 30000000,
  },
  {
    image: donateImg2,
    category: "Pendidikan",
    title: "Buku dan alat tulis siswa",
    description: "Keperluan peralatan tulis siswa untuk belajar",
    raised: 39500000,
    target: 54000000,
  },
  {
    image: donateImg3,
    category: "Hunian Layak",
    title: "Tempat tinggal anak yatim",
    description: "Tempat tinggal yang layak bagi anak sebatang kara",
    raised: 98450000,
    target: 280000000,
  },
  {
    image: donateImg4,
    category: "Sembako",
    title: "Makan siang gratis",
    description: "Berbagi makan siang gratis bagi masyarakat membutuhkan",
    raised: 1200000,
    target: 4500000,
  },
  {
    image: donateImg5,
    category: "Sembako",
    title: "Berbagi beras untuk desa",
    description: "Sumber makan pokok bagi masyarakat desa",
    raised: 7800000,
    target: 12000000,
  },
  {
    image: donateImg6,
    category: "Kesehatan",
    title: "Biaya berobat kanker",
    description: "Biaya upaya penyembuhan kanker paru-paru",
    raised: 68540000,
    target: 130000000,
  },
  {
    image: donateImg7,
    category: "Pendidikan",
    title: "Pembelian Kursi dan meja",
    description:
      "Membeli peralatan meja kursi untuk sekolah yang layak bagi siswa",
    raised: 74500000,
    target: 89000000,
  },
  {
    image: donateImg8,
    category: "Hunian Layak",
    title: "Renovasi panti asuhan",
    description: "Perbaikan atap dan tembok untuk panti asuhan",
    raised: 110500000,
    target: 180000000,
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
      <div className="load-more">
        <button
          className="btn flex"
          onClick={() => {
            // navigate("/offers");
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

type TDonateCard = {
  image: string;
  category: string;
  title: string;
  description: string;
  raised: number;
  target: number;
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
                    width: `${(raised / target) * 100}%`,
                  }}
                ></div>
              </div>
              <Grid container spacing={2} sx={{ width: "300px", mt: "10px" }}>
                <Grid item xs={6}>
                  <h6>Terkumpul:</h6>
                  <p className="money-raised">{formatCurrency(raised)}</p>
                </Grid>
                <Grid item xs={6}>
                  <h6>Target:</h6>
                  <p className="money-raised">{formatCurrency(target)}</p>
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
