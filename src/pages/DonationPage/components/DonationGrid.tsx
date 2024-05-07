import { Grid } from "@mui/material";
import { useDonationContext } from "../../../context/DonationContext";
import DonationCard from "./DonationCard";

import donateImg1 from "../../../assets/donate1.png";
import donateImg2 from "../../../assets/donate2.png";
import donateImg3 from "../../../assets/donate3.png";
import donateImg4 from "../../../assets/donate4.png";
import donateImg5 from "../../../assets/donate5.png";
import donateImg6 from "../../../assets/donate6.png";
import donateImg7 from "../../../assets/donate7.png";
import donateImg8 from "../../../assets/donate8.png";
import bmw from "../../../assets/bmw.jpg";
import pengungsi from "../../../assets/pengungsi.jpg";
import "../../../styles/donateGrid.css";

const donations = [
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

export default function DonationGrid() {
  const { category, sort, search, onTogglePopup } = useDonationContext();

  let filteredDonations = donations.filter((donation) => {
    if (category === null || category === "None") return true;
    else return donation.category === category;
  });

  if (search) {
    filteredDonations = [...filteredDonations].filter(
      (donation) =>
        donation.title.toLowerCase().includes(search.toLowerCase()) ||
        donation.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  const sortedDonations = sort
    ? filteredDonations.reverse()
    : filteredDonations;

  return (
    <div className="donate-grid container">
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src="../../../assets/donate2.png" alt="" />
        {sortedDonations.length > 0 ? (
          sortedDonations.map((donate, index) => (
            <DonationCard
              key={index}
              donate={donate}
              onOpenPopup={onTogglePopup}
            />
          ))
        ) : (
          <h3 className="not-found">No donations found</h3>
        )}
      </Grid>
    </div>
  );
}
