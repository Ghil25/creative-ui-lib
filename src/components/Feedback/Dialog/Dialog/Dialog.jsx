import React from "react";
import { Dialog as MUIDialog } from "@mui/material";

const Dialog = ({
  open,
  ariaDescribedby,
  ariaLabelledby,
  classes,
  children,
  disableEscapeKeyDown,
  fullScreen,
  fullWidth,
  maxWidth,
  onClose,
  PaperProps,
  scroll,
  TransitionComponent,
  TransitionProps,
  ...props
}) => {
  return (
    <MUIDialog
      classes={classes}
      open={open}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      disableEscapeKeyDown={disableEscapeKeyDown}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={onClose}
      PaperProps={PaperProps}
      scroll={scroll}
      TransitionComponent={TransitionComponent}
      TransitionProps={TransitionProps}
      {...props}
    >
      {children}{" "}
    </MUIDialog>
  );
};

export default Dialog;
