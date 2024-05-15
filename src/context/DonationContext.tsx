import { createContext, useContext, useEffect, useState } from "react";
import { TDonation } from "../types/TDonation";
import {
  TSetStateLocalStorage,
  useLocalStorageState,
} from "../hooks/useLocalStorage";

import donateImg1 from "../assets/donate1.png";
import donateImg2 from "../assets/donate2.png";
import donateImg3 from "../assets/donate3.png";
import donateImg4 from "../assets/donate4.png";
import donateImg5 from "../assets/donate5.png";
import donateImg6 from "../assets/donate6.png";
import donateImg7 from "../assets/donate7.png";
import donateImg8 from "../assets/donate8.png";
import bmw from "../assets/bmw.jpg";
import rumah from "../assets/rumah.jpg";

interface IDonationContext {
  category: string | null;
  setCategory: (category: string | null) => void;
  openPopup: boolean;
  onTogglePopup: () => void;
  sort: boolean;
  setSort: (sort: boolean) => void;
  search: string;
  setSearch: (search: string) => void;
  donations: TDonation[];
  setDonations: TSetStateLocalStorage<TDonation[]>;
  selectedDonation: TDonation | null;
  setSelectedDonation: (donation: TDonation | null) => void;
}

const DonationContext = createContext<IDonationContext | undefined>(undefined);

function DonationProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<string | null>(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedDonation, setSelectedDonation] = useState<TDonation | null>(
    null
  );
  const [donations, setDonations] = useLocalStorageState<TDonation[]>(
    "donations",
    []
  );

  useEffect(() => {
    const storedDonations = localStorage.getItem("donations");

    if (storedDonations) {
      setDonations((donations) =>
        donations.map((donation: TDonation) => {
          if (donation.title === "Rumah bagi pengungsi") {
            return {
              image: rumah,
              category: "Hunian Layak",
              title: "Rumah layak untuk Rachel",
              description:
                "Biaya pembangunan rumah layak bagi orang yang membutuhkan",
              raised: 634000000,
              target: 850000000,
            };
          } else return donation;
        })
      );
    }

    if (!storedDonations) {
      setDonations(() => [
        {
          image: bmw,
          category: "Sembako",
          title: "Mobil bmw untuk Kezia",
          description:
            "Bantuan biaya mobil bmw untuk masyarakat yang membutuhkan",
          raised: 1000,
          target: 999000000,
        },
        {
          image: rumah,
          category: "Hunian Layak",
          title: "Rumah layak untuk Rachel",
          description:
            "Biaya pembangunan rumah layak bagi orang yang membutuhkan",
          raised: 634000000,
          target: 850000000,
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
      ]);
    } else {
      if (selectedDonation) {
        const updatedDonations = JSON.parse(storedDonations).map(
          (donation: TDonation) => {
            if (donation.title === selectedDonation.title)
              return selectedDonation;
            else return donation;
          }
        );

        setDonations(updatedDonations);
      }
    }
  }, [selectedDonation, setDonations]);

  function onTogglePopup() {
    setOpenPopup((prev) => !prev);
  }

  return (
    <DonationContext.Provider
      value={{
        category,
        setCategory,
        openPopup,
        onTogglePopup,
        sort,
        setSort,
        search,
        setSearch,
        donations,
        setDonations,
        selectedDonation,
        setSelectedDonation,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
}

const useDonationContext = (): IDonationContext => {
  const context = useContext(DonationContext);

  if (context === undefined)
    throw new Error("useDonateContext must be used within a AppProvider");

  return context;
};

export { DonationProvider, useDonationContext };
