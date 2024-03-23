import { Grid } from "@mui/material";

const Achievements = () => {
  return (
    <div className="achievements">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} className="achievement">
          <div>
            <h1>100</h1>
            <h5>Program</h5>
            <svg
              width="69"
              height="68"
              viewBox="0 0 69 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_3_577"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="69"
                height="68"
              >
                <rect x="0.5" width="67.7377" height="67.7377" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_3_577)">
                <path
                  d="M46.516 33.7603L34.5859 21.8302L46.516 9.90002L58.446 21.8302L46.516 33.7603ZM13.5264 29.9608V13.0264H30.4608V29.9608H13.5264ZM38.2767 54.7112V37.7768H55.2111V54.7112H38.2767ZM13.5264 54.7112V37.7768H30.4608V54.7112H13.5264ZM16.3488 27.1384H27.6384V15.8488H16.3488V27.1384ZM46.5865 29.874L54.5598 21.9007L46.5865 13.9275L38.6132 21.9007L46.5865 29.874ZM41.0991 51.8888H52.3887V40.5992H41.0991V51.8888ZM16.3488 51.8888H27.6384V40.5992H16.3488V51.8888Z"
                  fill="#FFB23F"
                />
              </g>
            </svg>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievements;
