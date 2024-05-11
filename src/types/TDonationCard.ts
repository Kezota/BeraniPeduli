import { TDonation } from "./TDonation";

export type TDonationCard = {
  donation: TDonation;
  onOpenPopup: () => void;
  setSelectedDonation: (donation: TDonation | null) => void;
};
