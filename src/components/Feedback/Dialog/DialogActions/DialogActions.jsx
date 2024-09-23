import React from "react";
import { DialogActions as MUIDialogActions } from "@mui/material";

const DialogActions = ({ children, disableSpacing, classes, sx, ...props }) => {
  return (
    <MUIDialogActions
      disableSpacing={disableSpacing}
      classes={classes}
      sx={sx}
      {...props}
    >
      {children}
    </MUIDialogActions>
  );
};

export default DialogActions;
