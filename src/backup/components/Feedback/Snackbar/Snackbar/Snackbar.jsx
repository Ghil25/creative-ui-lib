import React from "react";
import { Snackbar as MUISnackbar } from "@mui/material";

const Snackbar = ({
  action,
  anchorOrigin,
  autoHideDuration,
  children,
  onClose,
  classes,
  ContentProps,
  disableWindowBlurListener,
  key,
  message,
  open,
  resumeHideDuration,
  sx,
  TransitionComponent,
  transitionDuration,
  TransitionProps,
  ...props
}) => {
  return (
    <MUISnackbar
      action={action}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      classes={classes}
      ContentProps={ContentProps}
      disableWindowBlurListener={disableWindowBlurListener}
      key={key}
      message={message}
      open={open}
      resumeHideDuration={resumeHideDuration}
      sx={sx}
      TransitionComponent={TransitionComponent}
      transitionDuration={transitionDuration}
      TransitionProps={TransitionProps}
      {...props}
    >
      {children}
    </MUISnackbar>
  );
};

export default Snackbar;
