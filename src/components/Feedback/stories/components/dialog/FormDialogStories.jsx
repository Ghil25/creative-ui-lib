import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "../../../Dialog";

import { Button, TextField } from "../../../../Input";

const FormDialog = ({
  button1,
  button2,
  button3,
  dialog,
  dialogTitle,
  dialogContent,
  dialogText,
  dialogActions,
  textField,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button {...button1} onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} {...dialog}>
        <DialogTitle {...dialogTitle}>Subscribe</DialogTitle>
        <DialogContent {...dialogContent}>
          <DialogContentText {...dialogText}>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField {...textField} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} {...button2}>
            Cancel
          </Button>
          <Button onClick={handleClose} {...button3}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
