import { TDonation } from "./TDonation";

export type TDonationCard = {
  donate: TDonation;
  onOpenPopup: () => void;
};
