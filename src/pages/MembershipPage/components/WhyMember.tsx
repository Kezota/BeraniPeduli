import "../../../styles/whyMember.css";
import whyMember from "../../../assets/whyMember.png";
import "aos/dist/aos.css";

export default function WhyMember() {
  return (
    <section className="why-member">
      <div className="image" data-aos="fade-right">
        <img src={whyMember} alt="" />
      </div>
      <div
        className="why-member-detail"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h3>Mengapa menjadi Member BeraniPeduli?</h3>
        <p>
          Sebagai member BeraniPeduli, kontribusi Anda, baik per minggu, per
          bulan, maupun per tahun, akan digunakan untuk mendukung berbagai
          inisiatif sosial dan kegiatan volunteer kami. Dana yang terkumpul dari
          membership akan didonasikan untuk membantu mereka yang membutuhkan,
          termasuk:
        </p>
        <div className="points">
          <div
            className="point"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
              >
                <mask
                  id="mask0_811_194"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="37"
                >
                  <rect width="35.8871" height="36.5542" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_811_194)">
                  <path
                    d="M17.9432 33.5078C15.8747 33.5078 13.9308 33.108 12.1115 32.3083C10.2923 31.5087 8.70973 30.4235 7.36397 29.0527C6.0182 27.6819 4.95281 26.07 4.16778 24.2169C3.38275 22.3638 2.99023 20.3838 2.99023 18.2768C2.99023 16.1699 3.38275 14.1899 4.16778 12.3368C4.95281 10.4837 6.0182 8.87173 7.36397 7.50095C8.70973 6.13016 10.2923 5.04496 12.1115 4.24533C13.9308 3.44571 15.8747 3.0459 17.9432 3.0459C19.5631 3.0459 21.0958 3.28705 22.5412 3.76937C23.9867 4.25168 25.32 4.92438 26.5411 5.78747L24.3729 8.03403C23.4259 7.42479 22.4166 6.94883 21.345 6.60613C20.2733 6.26343 19.1394 6.09209 17.9432 6.09209C14.6286 6.09209 11.8062 7.27883 9.47607 9.65232C7.14591 12.0258 5.98082 14.9006 5.98082 18.2768C5.98082 21.653 7.14591 24.5279 9.47607 26.9014C11.8062 29.2748 14.6286 30.4616 17.9432 30.4616C21.2577 30.4616 24.0801 29.2748 26.4103 26.9014C28.7404 24.5279 29.9055 21.653 29.9055 18.2768C29.9055 17.8199 29.8806 17.363 29.8308 16.9061C29.7809 16.4491 29.7062 16.0049 29.6065 15.5733L32.0363 13.0983C32.3105 13.9106 32.5223 14.7483 32.6718 15.6114C32.8213 16.4745 32.8961 17.363 32.8961 18.2768C32.8961 20.3838 32.5036 22.3638 31.7186 24.2169C30.9335 26.07 29.8681 27.6819 28.5224 29.0527C27.1766 30.4235 25.5941 31.5087 23.7748 32.3083C21.9555 33.108 20.0117 33.5078 17.9432 33.5078ZM15.8498 25.2831L9.49476 18.8099L11.5882 16.6776L15.8498 21.0184L30.8027 5.74939L32.8961 7.88172L15.8498 25.2831Z"
                    fill="#FFB23F"
                  />
                </g>
              </svg>
            </span>
            <p style={{ marginBottom: 0 }}>Penyediaan sembako</p>
          </div>
          <div
            className="point"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
              >
                <mask
                  id="mask0_811_194"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="37"
                >
                  <rect width="35.8871" height="36.5542" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_811_194)">
                  <path
                    d="M17.9432 33.5078C15.8747 33.5078 13.9308 33.108 12.1115 32.3083C10.2923 31.5087 8.70973 30.4235 7.36397 29.0527C6.0182 27.6819 4.95281 26.07 4.16778 24.2169C3.38275 22.3638 2.99023 20.3838 2.99023 18.2768C2.99023 16.1699 3.38275 14.1899 4.16778 12.3368C4.95281 10.4837 6.0182 8.87173 7.36397 7.50095C8.70973 6.13016 10.2923 5.04496 12.1115 4.24533C13.9308 3.44571 15.8747 3.0459 17.9432 3.0459C19.5631 3.0459 21.0958 3.28705 22.5412 3.76937C23.9867 4.25168 25.32 4.92438 26.5411 5.78747L24.3729 8.03403C23.4259 7.42479 22.4166 6.94883 21.345 6.60613C20.2733 6.26343 19.1394 6.09209 17.9432 6.09209C14.6286 6.09209 11.8062 7.27883 9.47607 9.65232C7.14591 12.0258 5.98082 14.9006 5.98082 18.2768C5.98082 21.653 7.14591 24.5279 9.47607 26.9014C11.8062 29.2748 14.6286 30.4616 17.9432 30.4616C21.2577 30.4616 24.0801 29.2748 26.4103 26.9014C28.7404 24.5279 29.9055 21.653 29.9055 18.2768C29.9055 17.8199 29.8806 17.363 29.8308 16.9061C29.7809 16.4491 29.7062 16.0049 29.6065 15.5733L32.0363 13.0983C32.3105 13.9106 32.5223 14.7483 32.6718 15.6114C32.8213 16.4745 32.8961 17.363 32.8961 18.2768C32.8961 20.3838 32.5036 22.3638 31.7186 24.2169C30.9335 26.07 29.8681 27.6819 28.5224 29.0527C27.1766 30.4235 25.5941 31.5087 23.7748 32.3083C21.9555 33.108 20.0117 33.5078 17.9432 33.5078ZM15.8498 25.2831L9.49476 18.8099L11.5882 16.6776L15.8498 21.0184L30.8027 5.74939L32.8961 7.88172L15.8498 25.2831Z"
                    fill="#FFB23F"
                  />
                </g>
              </svg>
            </span>
            <p style={{ marginBottom: 0 }}>Bantuan bencana</p>
          </div>
          <div
            className="point"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
              >
                <mask
                  id="mask0_811_194"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="37"
                >
                  <rect width="35.8871" height="36.5542" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_811_194)">
                  <path
                    d="M17.9432 33.5078C15.8747 33.5078 13.9308 33.108 12.1115 32.3083C10.2923 31.5087 8.70973 30.4235 7.36397 29.0527C6.0182 27.6819 4.95281 26.07 4.16778 24.2169C3.38275 22.3638 2.99023 20.3838 2.99023 18.2768C2.99023 16.1699 3.38275 14.1899 4.16778 12.3368C4.95281 10.4837 6.0182 8.87173 7.36397 7.50095C8.70973 6.13016 10.2923 5.04496 12.1115 4.24533C13.9308 3.44571 15.8747 3.0459 17.9432 3.0459C19.5631 3.0459 21.0958 3.28705 22.5412 3.76937C23.9867 4.25168 25.32 4.92438 26.5411 5.78747L24.3729 8.03403C23.4259 7.42479 22.4166 6.94883 21.345 6.60613C20.2733 6.26343 19.1394 6.09209 17.9432 6.09209C14.6286 6.09209 11.8062 7.27883 9.47607 9.65232C7.14591 12.0258 5.98082 14.9006 5.98082 18.2768C5.98082 21.653 7.14591 24.5279 9.47607 26.9014C11.8062 29.2748 14.6286 30.4616 17.9432 30.4616C21.2577 30.4616 24.0801 29.2748 26.4103 26.9014C28.7404 24.5279 29.9055 21.653 29.9055 18.2768C29.9055 17.8199 29.8806 17.363 29.8308 16.9061C29.7809 16.4491 29.7062 16.0049 29.6065 15.5733L32.0363 13.0983C32.3105 13.9106 32.5223 14.7483 32.6718 15.6114C32.8213 16.4745 32.8961 17.363 32.8961 18.2768C32.8961 20.3838 32.5036 22.3638 31.7186 24.2169C30.9335 26.07 29.8681 27.6819 28.5224 29.0527C27.1766 30.4235 25.5941 31.5087 23.7748 32.3083C21.9555 33.108 20.0117 33.5078 17.9432 33.5078ZM15.8498 25.2831L9.49476 18.8099L11.5882 16.6776L15.8498 21.0184L30.8027 5.74939L32.8961 7.88172L15.8498 25.2831Z"
                    fill="#FFB23F"
                  />
                </g>
              </svg>
            </span>
            <p style={{ marginBottom: 0 }}>Program bermanfaat lainnya</p>
          </div>
        </div>
      </div>
    </section>
  );
}
