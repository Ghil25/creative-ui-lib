import React from "react";
import { DialogContent as MUIDialogContent } from "@mui/material";

const DialogContent = ({ children, dividers, sx, ...props }) => {
  return (
    <MUIDialogContent dividers={dividers} sx={sx} {...props}>
      {children}
    </MUIDialogContent>
  );
};

export default DialogContent;
