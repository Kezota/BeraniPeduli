import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
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
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </section>
  );
}
