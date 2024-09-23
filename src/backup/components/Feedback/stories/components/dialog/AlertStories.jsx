import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "../../../Dialog";

import { Button } from "../../../../Input";

const Alert = ({
  dialog,
  dialogTitle,
  dialogContent,
  dialogContentText,
  dialogActions,
  button1,
  button2,
  button3,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button {...button1} onClick={handleClickOpen}>
        Open Allert
      </Button>
      <Dialog {...dialog} open={open} onClose={handleClose}>
        <DialogTitle {...dialogTitle}>
          Use Google's location service?
        </DialogTitle>
        <DialogContent {...dialogContent}>
          <DialogContentText {...dialogContentText}>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions {...dialogActions}>
          <Button {...button2} onClick={handleClose}>
            Disagree
          </Button>
          <Button {...button3} onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Alert;
