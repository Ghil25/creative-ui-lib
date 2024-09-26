import React from "react";
import { DialogContentText as MUIDialogContentText } from "@mui/material";
import PropTypes from "prop-types";

const DialogContentText = ({ children, sx, classes, ...props }) => {
  return (
    <MUIDialogContentText sx={sx} classes={classes} {...props}>
      {children}
    </MUIDialogContentText>
  );
};

DialogContentText.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  classes: PropTypes.object,
};

export default DialogContentText;
