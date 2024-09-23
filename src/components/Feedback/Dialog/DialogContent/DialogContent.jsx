import React from "react";
import { DialogContent as MUIDialogContent } from "@mui/material";

const DialogContent = ({ children, dividers, classes, sx, ...props }) => {
  return (
    <MUIDialogContent dividers={dividers} classes={classes} sx={sx} {...props}>
      {children}
    </MUIDialogContent>
  );
};

export default DialogContent;
