import React from "react";
import { Dialog as MUIDialog } from "@mui/material";
import PropTypes from "prop-types";

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
      {children}
    </MUIDialog>
  );
};

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  ariaDescribedby: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  classes: PropTypes.object,
  children: PropTypes.node,
  disableEscapeKeyDown: PropTypes.bool,
  fullScreen: PropTypes.bool,
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  onClose: PropTypes.func,
  PaperProps: PropTypes.object,
  scroll: PropTypes.oneOf(["paper", "body"]),
  TransitionComponent: PropTypes.elementType,
  TransitionProps: PropTypes.object,
};

export default Dialog;
