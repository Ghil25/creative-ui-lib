import React from "react";
import { DialogActions as MUIDialogActions } from "@mui/material";
import PropTypes from "prop-types";

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

DialogActions.propTypes = {
  children: PropTypes.node,
  disableSpacing: PropTypes.bool,
  classes: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default DialogActions;
