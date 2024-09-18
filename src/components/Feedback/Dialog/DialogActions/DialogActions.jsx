import React from "react";
import { DialogActions as MUIDialogActions } from "@mui/material";

const DialogActions = ({ children, disableSpacing, sx, ...props }) => {
  return (
    <MUIDialogActions disableSpacing={disableSpacing} sx={sx} {...props}>
      {children}
    </MUIDialogActions>
  );
};

export default DialogActions;
