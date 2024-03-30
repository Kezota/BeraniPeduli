import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonial.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <div className="testimonial">
      <h2>Apa yang orang katakan?</h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={21.6}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <svg
            width="68"
            height="73"
            viewBox="0 0 68 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.028 22.9859C14.1115 22.7241 15.219 22.5923 16.3299 22.5929C25.1274 22.5929 32.2571 30.7409 32.2571 40.7879C32.2571 50.8379 25.1274 58.9859 16.3299 58.9859C7.5324 58.9859 0.399902 50.8409 0.399902 40.7879C0.399902 40.4939 0.405527 40.1969 0.41959 39.9029H0.399902C0.399902 24.7379 11.1999 12.3989 24.4749 12.3989V18.5069C20.169 18.5069 16.1977 20.1809 13.028 22.9859ZM48.6737 22.9859C49.7368 22.7279 50.8393 22.5929 51.9699 22.5929C60.7674 22.5929 67.8999 30.7409 67.8999 40.7879C67.8999 50.8379 60.7674 58.9859 51.9699 58.9859C43.1724 58.9859 36.0427 50.8409 36.0427 40.7879C36.0427 40.4939 36.0483 40.1969 36.0624 39.9029H36.0427C36.0427 24.7379 46.8427 12.3989 60.1177 12.3989V18.5069C55.809 18.5069 51.8433 20.1809 48.6737 22.9859Z"
              fill="#438D7C"
            />
          </svg>

          <div className="message">
            Saya sangat terkesan dengan dedikasi BeraniPeduli dalam membantu
            mereka yang membutuhkan. Setiap donasi saya merasa memiliki dampak
            yang nyata.
          </div>
          <div className="name">Sarah, Donatur Setia</div>
        </SwiperSlide>
        <SwiperSlide>
          <svg
            width="68"
            height="73"
            viewBox="0 0 68 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.028 22.9859C14.1115 22.7241 15.219 22.5923 16.3299 22.5929C25.1274 22.5929 32.2571 30.7409 32.2571 40.7879C32.2571 50.8379 25.1274 58.9859 16.3299 58.9859C7.5324 58.9859 0.399902 50.8409 0.399902 40.7879C0.399902 40.4939 0.405527 40.1969 0.41959 39.9029H0.399902C0.399902 24.7379 11.1999 12.3989 24.4749 12.3989V18.5069C20.169 18.5069 16.1977 20.1809 13.028 22.9859ZM48.6737 22.9859C49.7368 22.7279 50.8393 22.5929 51.9699 22.5929C60.7674 22.5929 67.8999 30.7409 67.8999 40.7879C67.8999 50.8379 60.7674 58.9859 51.9699 58.9859C43.1724 58.9859 36.0427 50.8409 36.0427 40.7879C36.0427 40.4939 36.0483 40.1969 36.0624 39.9029H36.0427C36.0427 24.7379 46.8427 12.3989 60.1177 12.3989V18.5069C55.809 18.5069 51.8433 20.1809 48.6737 22.9859Z"
              fill="#438D7C"
            />
          </svg>

          <div className="message">
            BeraniPeduli tidak hanya menyediakan platform untuk berdonasi,
            tetapi juga membangun komunitas peduli yang solid. Saya bangga bisa
            menjadi bagian dari gerakan ini.
          </div>
          <div className="name">Budi, Pendukung BeraniPeduli</div>
        </SwiperSlide>
        <SwiperSlide>
          <svg
            width="68"
            height="73"
            viewBox="0 0 68 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.028 22.9859C14.1115 22.7241 15.219 22.5923 16.3299 22.5929C25.1274 22.5929 32.2571 30.7409 32.2571 40.7879C32.2571 50.8379 25.1274 58.9859 16.3299 58.9859C7.5324 58.9859 0.399902 50.8409 0.399902 40.7879C0.399902 40.4939 0.405527 40.1969 0.41959 39.9029H0.399902C0.399902 24.7379 11.1999 12.3989 24.4749 12.3989V18.5069C20.169 18.5069 16.1977 20.1809 13.028 22.9859ZM48.6737 22.9859C49.7368 22.7279 50.8393 22.5929 51.9699 22.5929C60.7674 22.5929 67.8999 30.7409 67.8999 40.7879C67.8999 50.8379 60.7674 58.9859 51.9699 58.9859C43.1724 58.9859 36.0427 50.8409 36.0427 40.7879C36.0427 40.4939 36.0483 40.1969 36.0624 39.9029H36.0427C36.0427 24.7379 46.8427 12.3989 60.1177 12.3989V18.5069C55.809 18.5069 51.8433 20.1809 48.6737 22.9859Z"
              fill="#438D7C"
            />
          </svg>

          <div className="message">
            Melalui BeraniPeduli, saya menemukan cara yang efektif untuk
            menyumbangkan waktu dan uang saya kepada yang membutuhkan. Sangat
            mudah dan bermakna.
          </div>
          <div className="name">Ani, Relawan BeraniPeduli</div>
        </SwiperSlide>
        <SwiperSlide>
          <svg
            width="68"
            height="73"
            viewBox="0 0 68 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.028 22.9859C14.1115 22.7241 15.219 22.5923 16.3299 22.5929C25.1274 22.5929 32.2571 30.7409 32.2571 40.7879C32.2571 50.8379 25.1274 58.9859 16.3299 58.9859C7.5324 58.9859 0.399902 50.8409 0.399902 40.7879C0.399902 40.4939 0.405527 40.1969 0.41959 39.9029H0.399902C0.399902 24.7379 11.1999 12.3989 24.4749 12.3989V18.5069C20.169 18.5069 16.1977 20.1809 13.028 22.9859ZM48.6737 22.9859C49.7368 22.7279 50.8393 22.5929 51.9699 22.5929C60.7674 22.5929 67.8999 30.7409 67.8999 40.7879C67.8999 50.8379 60.7674 58.9859 51.9699 58.9859C43.1724 58.9859 36.0427 50.8409 36.0427 40.7879C36.0427 40.4939 36.0483 40.1969 36.0624 39.9029H36.0427C36.0427 24.7379 46.8427 12.3989 60.1177 12.3989V18.5069C55.809 18.5069 51.8433 20.1809 48.6737 22.9859Z"
              fill="#438D7C"
            />
          </svg>

          <div className="message">
            Melalui BeraniPeduli, saya menemukan cara yang efektif untuk
            menyumbangkan waktu dan uang saya kepada yang membutuhkan. Sangat
            mudah dan bermakna.
          </div>
          <div className="name">Rudi, Pengguna BeraniPeduli</div>
        </SwiperSlide>
        <SwiperSlide>
          <svg
            width="68"
            height="73"
            viewBox="0 0 68 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.028 22.9859C14.1115 22.7241 15.219 22.5923 16.3299 22.5929C25.1274 22.5929 32.2571 30.7409 32.2571 40.7879C32.2571 50.8379 25.1274 58.9859 16.3299 58.9859C7.5324 58.9859 0.399902 50.8409 0.399902 40.7879C0.399902 40.4939 0.405527 40.1969 0.41959 39.9029H0.399902C0.399902 24.7379 11.1999 12.3989 24.4749 12.3989V18.5069C20.169 18.5069 16.1977 20.1809 13.028 22.9859ZM48.6737 22.9859C49.7368 22.7279 50.8393 22.5929 51.9699 22.5929C60.7674 22.5929 67.8999 30.7409 67.8999 40.7879C67.8999 50.8379 60.7674 58.9859 51.9699 58.9859C43.1724 58.9859 36.0427 50.8409 36.0427 40.7879C36.0427 40.4939 36.0483 40.1969 36.0624 39.9029H36.0427C36.0427 24.7379 46.8427 12.3989 60.1177 12.3989V18.5069C55.809 18.5069 51.8433 20.1809 48.6737 22.9859Z"
              fill="#438D7C"
            />
          </svg>

          <div className="message">
            Saya telah berdonasi melalui BeraniPeduli beberapa kali dan saya
            benar-benar terkesan dengan transparansi dan akuntabilitas mereka.
            Layanan pelanggan mereka juga luar biasa!
          </div>
          <div className="name">Lina, Donatur BeraniPeduli</div>
        </SwiperSlide>
        <SwiperSlide>
          <svg
            width="68"
            height="73"
            viewBox="0 0 68 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.028 22.9859C14.1115 22.7241 15.219 22.5923 16.3299 22.5929C25.1274 22.5929 32.2571 30.7409 32.2571 40.7879C32.2571 50.8379 25.1274 58.9859 16.3299 58.9859C7.5324 58.9859 0.399902 50.8409 0.399902 40.7879C0.399902 40.4939 0.405527 40.1969 0.41959 39.9029H0.399902C0.399902 24.7379 11.1999 12.3989 24.4749 12.3989V18.5069C20.169 18.5069 16.1977 20.1809 13.028 22.9859ZM48.6737 22.9859C49.7368 22.7279 50.8393 22.5929 51.9699 22.5929C60.7674 22.5929 67.8999 30.7409 67.8999 40.7879C67.8999 50.8379 60.7674 58.9859 51.9699 58.9859C43.1724 58.9859 36.0427 50.8409 36.0427 40.7879C36.0427 40.4939 36.0483 40.1969 36.0624 39.9029H36.0427C36.0427 24.7379 46.8427 12.3989 60.1177 12.3989V18.5069C55.809 18.5069 51.8433 20.1809 48.6737 22.9859Z"
              fill="#438D7C"
            />
          </svg>

          <div className="message">
            Saya senang melihat dampak positif yang dihasilkan oleh
            BeraniPeduli. Mereka tidak hanya memberikan bantuan, tetapi juga
            membawa harapan kepada banyak orang.
          </div>
          <div className="name">Noah, Pengguna BeraniPeduli</div>
        </SwiperSlide>
        <SwiperSlide>
          <svg
            width="68"
            height="73"
            viewBox="0 0 68 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.028 22.9859C14.1115 22.7241 15.219 22.5923 16.3299 22.5929C25.1274 22.5929 32.2571 30.7409 32.2571 40.7879C32.2571 50.8379 25.1274 58.9859 16.3299 58.9859C7.5324 58.9859 0.399902 50.8409 0.399902 40.7879C0.399902 40.4939 0.405527 40.1969 0.41959 39.9029H0.399902C0.399902 24.7379 11.1999 12.3989 24.4749 12.3989V18.5069C20.169 18.5069 16.1977 20.1809 13.028 22.9859ZM48.6737 22.9859C49.7368 22.7279 50.8393 22.5929 51.9699 22.5929C60.7674 22.5929 67.8999 30.7409 67.8999 40.7879C67.8999 50.8379 60.7674 58.9859 51.9699 58.9859C43.1724 58.9859 36.0427 50.8409 36.0427 40.7879C36.0427 40.4939 36.0483 40.1969 36.0624 39.9029H36.0427C36.0427 24.7379 46.8427 12.3989 60.1177 12.3989V18.5069C55.809 18.5069 51.8433 20.1809 48.6737 22.9859Z"
              fill="#438D7C"
            />
          </svg>

          <div className="message">
            BeraniPeduli adalah tempat yang dapat diandalkan untuk memberikan
            bantuan kepada yang membutuhkan. Sangat merekomendasikannya!
          </div>
          <div className="name">Dian, Donatur BeraniPeduli</div>
        </SwiperSlide>
        <SwiperSlide>
          <svg
            width="68"
            height="73"
            viewBox="0 0 68 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.028 22.9859C14.1115 22.7241 15.219 22.5923 16.3299 22.5929C25.1274 22.5929 32.2571 30.7409 32.2571 40.7879C32.2571 50.8379 25.1274 58.9859 16.3299 58.9859C7.5324 58.9859 0.399902 50.8409 0.399902 40.7879C0.399902 40.4939 0.405527 40.1969 0.41959 39.9029H0.399902C0.399902 24.7379 11.1999 12.3989 24.4749 12.3989V18.5069C20.169 18.5069 16.1977 20.1809 13.028 22.9859ZM48.6737 22.9859C49.7368 22.7279 50.8393 22.5929 51.9699 22.5929C60.7674 22.5929 67.8999 30.7409 67.8999 40.7879C67.8999 50.8379 60.7674 58.9859 51.9699 58.9859C43.1724 58.9859 36.0427 50.8409 36.0427 40.7879C36.0427 40.4939 36.0483 40.1969 36.0624 39.9029H36.0427C36.0427 24.7379 46.8427 12.3989 60.1177 12.3989V18.5069C55.809 18.5069 51.8433 20.1809 48.6737 22.9859Z"
              fill="#438D7C"
            />
          </svg>

          <div className="message">
            Saya merasa terhubung dengan tujuan kemanusiaan BeraniPeduli. Mari
            bergabung dan memberikan dampak positif bersama-sama!
          </div>
          <div className="name">Rina, Relawan BeraniPeduli</div>
        </SwiperSlide>
        <SwiperSlide>
          <svg
            width="68"
            height="73"
            viewBox="0 0 68 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.028 22.9859C14.1115 22.7241 15.219 22.5923 16.3299 22.5929C25.1274 22.5929 32.2571 30.7409 32.2571 40.7879C32.2571 50.8379 25.1274 58.9859 16.3299 58.9859C7.5324 58.9859 0.399902 50.8409 0.399902 40.7879C0.399902 40.4939 0.405527 40.1969 0.41959 39.9029H0.399902C0.399902 24.7379 11.1999 12.3989 24.4749 12.3989V18.5069C20.169 18.5069 16.1977 20.1809 13.028 22.9859ZM48.6737 22.9859C49.7368 22.7279 50.8393 22.5929 51.9699 22.5929C60.7674 22.5929 67.8999 30.7409 67.8999 40.7879C67.8999 50.8379 60.7674 58.9859 51.9699 58.9859C43.1724 58.9859 36.0427 50.8409 36.0427 40.7879C36.0427 40.4939 36.0483 40.1969 36.0624 39.9029H36.0427C36.0427 24.7379 46.8427 12.3989 60.1177 12.3989V18.5069C55.809 18.5069 51.8433 20.1809 48.6737 22.9859Z"
              fill="#438D7C"
            />
          </svg>

          <div className="message">
            BeraniPeduli adalah jembatan bagi saya untuk membantu orang-orang
            yang membutuhkan. Terima kasih atas kesempatan ini!
          </div>
          <div className="name">Adit, Donatur BeraniPeduli</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}