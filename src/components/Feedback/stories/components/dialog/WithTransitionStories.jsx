// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Slide,
// } from "../../../Dialog";
// import { Button } from "../../../../Input";
import React, { useState, forwardRef } from "react";
import Dialog from "../../../Dialog/Dialog/Dialog";
import DialogActions from "../../../Dialog/DialogActions/DialogActions";
import DialogContent from "../../../Dialog/DialogContent/DialogContent";
import DialogContentText from "../../../Dialog/DialogContentText/DialogContentText";
import DialogTitle from "../../../Dialog/DialogTitle/DialogTitle";
import Slide from "../../../Dialog/Slide/Slide";

import Button from "../../../../Input/Button/Button";
const Transition = forwardRef(function Transition({ slide, ...props }, ref) {
  return <Slide {...props} ref={ref} {...slide} />;
});

const WithTransitionDialog = ({
  button1,
  button2,
  button3,
  dialog,
  dialogTitle,
  dialogContent,
  dialogText,
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
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        {...dialog}
      >
        <DialogTitle {...dialogTitle}>
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent {...dialogContent}>
          <DialogContentText {...dialogText}>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} {...button2}>
            Disagree
          </Button>
          <Button onClick={handleClose} {...button3}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WithTransitionDialog;
