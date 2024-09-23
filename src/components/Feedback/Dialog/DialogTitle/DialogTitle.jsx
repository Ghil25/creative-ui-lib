import React from "react";
import { DialogTitle as MUIDialogTitle } from "@mui/material";

const DialogTitle = ({ children, sx, classes, ...props }) => {
  return (
    <MUIDialogTitle sx={sx} classes={classes} {...props}>
      {children}
    </MUIDialogTitle>
  );
};

export default DialogTitle;
