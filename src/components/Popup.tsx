import { Box, Modal } from "@mui/material";
import "../styles/popup.css";

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
};

type TPopup = {
  open: boolean;
  onClosePopup: () => void;
  children: React.ReactNode;
};

export default function Popup({ open, onClosePopup, children }: TPopup) {
  return (
    <section className="popup">
      <Modal
        open={open}
        onClose={onClosePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          height: "100vh",
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
