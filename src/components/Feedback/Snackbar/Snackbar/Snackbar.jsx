import React from "react";
import { Snackbar as MUISnackbar } from "@mui/material";
import PropTypes from "prop-types";

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

Snackbar.propTypes = {
  action: PropTypes.node,
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(["left", "center", "right"]),
    vertical: PropTypes.oneOf(["top", "bottom"]),
  }),
  autoHideDuration: PropTypes.number,
  children: PropTypes.node,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  ContentProps: PropTypes.object,
  disableWindowBlurListener: PropTypes.bool,
  key: PropTypes.any,
  message: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  resumeHideDuration: PropTypes.number,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  TransitionComponent: PropTypes.elementType,
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number,
    }),
  ]),
  TransitionProps: PropTypes.object,
};

export default Snackbar;
