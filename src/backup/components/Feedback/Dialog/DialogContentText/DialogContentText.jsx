import React from "react";
import { DialogContentText as MUIDialogContentText } from "@mui/material";

const DialogContentText = ({ children, sx, ...props }) => {
  return (
    <MUIDialogContentText sx={sx} {...props}>
      {children}
    </MUIDialogContentText>
  );
};
export default DialogContentText;
