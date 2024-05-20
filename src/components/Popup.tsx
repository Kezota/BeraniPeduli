import { Box, Modal } from "@mui/material";
import "../styles/popup.css";
import { useDonationContext } from "../context/DonationContext";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#F6F6F6",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  maxWidth: "90%",
  height: "fit-content",
};

export default function Popup({
  children,
  onTogglePopup,
}: {
  children: React.ReactNode;
  onTogglePopup: () => void;
}) {
  const { openPopup } = useDonationContext();
  return (
    <section className="popup">
      <Modal
        open={openPopup}
        onClose={onTogglePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          height: "fit-conten",
          overflowY: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </section>
  );
}
