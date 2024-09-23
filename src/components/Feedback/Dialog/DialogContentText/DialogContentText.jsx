import React from "react";
import { DialogContentText as MUIDialogContentText } from "@mui/material";

const DialogContentText = ({ children, sx, classes, ...props }) => {
  return (
    <MUIDialogContentText sx={sx} classes={classes} {...props}>
      {children}
    </MUIDialogContentText>
  );
};
export default DialogContentText;
