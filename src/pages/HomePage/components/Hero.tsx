import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import heroImage from "../../../assets/hero.png";
import "../../../styles/hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <Grid container spacing={1} sx={{ height: "82vh" }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="sec-container container">
            <div className="hero-text">
              <h1 className="title">
                Masa Depan yang Lebih Cerah untuk Semua!
              </h1>
              <p className="sub-title">
                Bersama BeraniPeduli, mari kita memberikan bantuan kepada mereka
                yang membutuhkan!
              </p>
              <button onClick={() => navigate("/donation")}>
                Donasi Sekarang
              </button>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "end",
          }}
        >
          <div style={{ height: "100%", display: "flex", alignItems: "end" }}>
            <img src={heroImage} />
          </div>
          <div className="blobs">
            <svg
              width="795"
              height="657"
              viewBox="0 0 795 657"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.36 0C-27.1116 148.592 -12.3058 330.131 99.0814 471.222C259.841 674.852 560.902 717.119 771.519 565.629L795 548.739V0H44.36Z"
                fill="url(#paint0_linear_109_21)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_109_21"
                  x1="189.408"
                  y1="473.361"
                  x2="575.575"
                  y2="-60.3188"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#438D7C" />
                  <stop offset="1" stopColor="#7FC5B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
