import { Grid } from "@mui/material";
import "./hero.css";

import heroImage from "../../assets/hero.png";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="hero">
      <Grid container spacing={1} sx={{ height: "90vh" }}>
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
              <Button>Donasi Sekarang</Button>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          style={{ height: "100%", display: "flex", alignItems: "end" }}
        >
          <div style={{ height: "100%", display: "flex", alignItems: "end" }}>
            <img src={heroImage} />
          </div>
          <svg
            className="blobs"
            width="732"
            height="739"
            viewBox="0 0 732 739"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M92.597 0C-27.2292 160.237 -32.6348 386.386 93.8388 554.222C245.191 755.074 528.879 797.394 732 651.26V0H92.597Z"
              fill="url(#paint0_linear_82_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_82_5"
                x1="180.056"
                y1="556.361"
                x2="571.5"
                y2="39.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#438D7C" />
                <stop offset="1" stop-color="#7FC5B5" />
              </linearGradient>
            </defs>
          </svg>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
