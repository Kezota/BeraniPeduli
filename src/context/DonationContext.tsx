import { createContext, useContext, useState } from "react";

interface IDonationContext {
  category: string | null;
  setCategory: (category: string | null) => void;
  openPopup: boolean;
  onTogglePopup: () => void;
  sort: boolean;
  setSort: (sort: boolean) => void;
  search: string;
  setSearch: (search: string) => void;
  amount: number;
  setAmount: (amount: number) => void;
}

const DonationContext = createContext<IDonationContext | undefined>(undefined);

function DonationProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<string | null>(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [amount, setAmount] = useState(0);

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
        amount,
        setAmount,
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
