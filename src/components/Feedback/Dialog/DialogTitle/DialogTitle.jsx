import React from "react";
import { DialogTitle as MUIDialogTitle } from "@mui/material";

const DialogTitle = ({ children, sx, ...props }) => {
  return (
    <MUIDialogTitle sx={sx} {...props}>
      {children}
    </MUIDialogTitle>
  );
};

export default DialogTitle;
