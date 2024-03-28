import "./mission.css";
import missionImage from "../../assets/misi.png";

const Mission = () => {
  return (
    <div className="mission">
      <div className="mission-detail">
        <h4>Misi Kami</h4>
        <h3>Bersatu dalam Keberanian dan Mewujudkan Kebaikan</h3>
        <div className="points">
          <div
            className="point"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <span>
              <svg
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_3_561"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="51"
                  height="51"
                >
                  <rect width="51" height="51" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_3_561)">
                  <path
                    d="M25.5 46.75C22.5604 46.75 19.7979 46.1922 17.2125 45.0766C14.6271 43.9609 12.3781 42.4469 10.4656 40.5344C8.55312 38.6219 7.03906 36.3729 5.92344 33.7875C4.80781 31.2021 4.25 28.4396 4.25 25.5C4.25 22.5604 4.80781 19.7979 5.92344 17.2125C7.03906 14.6271 8.55312 12.3781 10.4656 10.4656C12.3781 8.55312 14.6271 7.03906 17.2125 5.92344C19.7979 4.80781 22.5604 4.25 25.5 4.25C27.8021 4.25 29.9802 4.58646 32.0344 5.25937C34.0885 5.93229 35.9833 6.87083 37.7188 8.075L34.6375 11.2094C33.2917 10.3594 31.8573 9.69531 30.3344 9.21719C28.8115 8.73906 27.2 8.5 25.5 8.5C20.7896 8.5 16.7786 10.1557 13.4672 13.4672C10.1557 16.7786 8.5 20.7896 8.5 25.5C8.5 30.2104 10.1557 34.2214 13.4672 37.5328C16.7786 40.8443 20.7896 42.5 25.5 42.5C30.2104 42.5 34.2214 40.8443 37.5328 37.5328C40.8443 34.2214 42.5 30.2104 42.5 25.5C42.5 24.8625 42.4646 24.225 42.3938 23.5875C42.3229 22.95 42.2167 22.3302 42.075 21.7281L45.5281 18.275C45.9177 19.4083 46.2188 20.5771 46.4313 21.7812C46.6437 22.9854 46.75 24.225 46.75 25.5C46.75 28.4396 46.1922 31.2021 45.0766 33.7875C43.9609 36.3729 42.4469 38.6219 40.5344 40.5344C38.6219 42.4469 36.3729 43.9609 33.7875 45.0766C31.2021 46.1922 28.4396 46.75 25.5 46.75ZM22.525 35.275L13.4937 26.2438L16.4688 23.2687L22.525 29.325L43.775 8.02187L46.75 10.9969L22.525 35.275Z"
                    fill="#FFB23F"
                  />
                </g>
              </svg>
            </span>
            <p>
              Mengumpulkan dan menyalurkan bantuan kepada mereka yang
              membutuhkan
            </p>
          </div>
          <div
            className="point"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <span>
              <svg
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_3_561"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="51"
                  height="51"
                >
                  <rect width="51" height="51" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_3_561)">
                  <path
                    d="M25.5 46.75C22.5604 46.75 19.7979 46.1922 17.2125 45.0766C14.6271 43.9609 12.3781 42.4469 10.4656 40.5344C8.55312 38.6219 7.03906 36.3729 5.92344 33.7875C4.80781 31.2021 4.25 28.4396 4.25 25.5C4.25 22.5604 4.80781 19.7979 5.92344 17.2125C7.03906 14.6271 8.55312 12.3781 10.4656 10.4656C12.3781 8.55312 14.6271 7.03906 17.2125 5.92344C19.7979 4.80781 22.5604 4.25 25.5 4.25C27.8021 4.25 29.9802 4.58646 32.0344 5.25937C34.0885 5.93229 35.9833 6.87083 37.7188 8.075L34.6375 11.2094C33.2917 10.3594 31.8573 9.69531 30.3344 9.21719C28.8115 8.73906 27.2 8.5 25.5 8.5C20.7896 8.5 16.7786 10.1557 13.4672 13.4672C10.1557 16.7786 8.5 20.7896 8.5 25.5C8.5 30.2104 10.1557 34.2214 13.4672 37.5328C16.7786 40.8443 20.7896 42.5 25.5 42.5C30.2104 42.5 34.2214 40.8443 37.5328 37.5328C40.8443 34.2214 42.5 30.2104 42.5 25.5C42.5 24.8625 42.4646 24.225 42.3938 23.5875C42.3229 22.95 42.2167 22.3302 42.075 21.7281L45.5281 18.275C45.9177 19.4083 46.2188 20.5771 46.4313 21.7812C46.6437 22.9854 46.75 24.225 46.75 25.5C46.75 28.4396 46.1922 31.2021 45.0766 33.7875C43.9609 36.3729 42.4469 38.6219 40.5344 40.5344C38.6219 42.4469 36.3729 43.9609 33.7875 45.0766C31.2021 46.1922 28.4396 46.75 25.5 46.75ZM22.525 35.275L13.4937 26.2438L16.4688 23.2687L22.525 29.325L43.775 8.02187L46.75 10.9969L22.525 35.275Z"
                    fill="#FFB23F"
                  />
                </g>
              </svg>
            </span>
            <p>
              Menjadi jembatan antara para donatur dan orang-orang yang
              membutuhkan.
            </p>
          </div>
          <div
            className="point"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <span>
              <svg
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_3_561"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="51"
                  height="51"
                >
                  <rect width="51" height="51" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_3_561)">
                  <path
                    d="M25.5 46.75C22.5604 46.75 19.7979 46.1922 17.2125 45.0766C14.6271 43.9609 12.3781 42.4469 10.4656 40.5344C8.55312 38.6219 7.03906 36.3729 5.92344 33.7875C4.80781 31.2021 4.25 28.4396 4.25 25.5C4.25 22.5604 4.80781 19.7979 5.92344 17.2125C7.03906 14.6271 8.55312 12.3781 10.4656 10.4656C12.3781 8.55312 14.6271 7.03906 17.2125 5.92344C19.7979 4.80781 22.5604 4.25 25.5 4.25C27.8021 4.25 29.9802 4.58646 32.0344 5.25937C34.0885 5.93229 35.9833 6.87083 37.7188 8.075L34.6375 11.2094C33.2917 10.3594 31.8573 9.69531 30.3344 9.21719C28.8115 8.73906 27.2 8.5 25.5 8.5C20.7896 8.5 16.7786 10.1557 13.4672 13.4672C10.1557 16.7786 8.5 20.7896 8.5 25.5C8.5 30.2104 10.1557 34.2214 13.4672 37.5328C16.7786 40.8443 20.7896 42.5 25.5 42.5C30.2104 42.5 34.2214 40.8443 37.5328 37.5328C40.8443 34.2214 42.5 30.2104 42.5 25.5C42.5 24.8625 42.4646 24.225 42.3938 23.5875C42.3229 22.95 42.2167 22.3302 42.075 21.7281L45.5281 18.275C45.9177 19.4083 46.2188 20.5771 46.4313 21.7812C46.6437 22.9854 46.75 24.225 46.75 25.5C46.75 28.4396 46.1922 31.2021 45.0766 33.7875C43.9609 36.3729 42.4469 38.6219 40.5344 40.5344C38.6219 42.4469 36.3729 43.9609 33.7875 45.0766C31.2021 46.1922 28.4396 46.75 25.5 46.75ZM22.525 35.275L13.4937 26.2438L16.4688 23.2687L22.525 29.325L43.775 8.02187L46.75 10.9969L22.525 35.275Z"
                    fill="#FFB23F"
                  />
                </g>
              </svg>
            </span>
            <p>
              Memberikan dampak yang nyata bagi kehidupan mereka yang kurang
              beruntung.
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={missionImage} alt="Mission Image" />
      </div>
    </div>
  );
};

export default Mission;
