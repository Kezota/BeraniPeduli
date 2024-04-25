import Popup from "../../../components/Popup";

type TDonatePopup = {
  open: boolean;
  onClosePopup: () => void;
};

export default function DonatePopup({ open, onClosePopup }: TDonatePopup) {
  return (
    <Popup open={open} onClosePopup={onClosePopup}>
      <h2>Donate</h2>
      <p>
        If you would like to donate to the project, please contact us at{" "}
        <a href="mailto: /" />
      </p>
    </Popup>
  );
}
