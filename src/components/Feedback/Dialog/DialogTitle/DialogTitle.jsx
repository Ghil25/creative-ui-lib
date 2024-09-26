import React from "react";
import { DialogTitle as MUIDialogTitle } from "@mui/material";
import PropTypes from "prop-types";

const DialogTitle = ({ children, sx, classes, ...props }) => {
  return (
    <MUIDialogTitle sx={sx} classes={classes} {...props}>
      {children}
    </MUIDialogTitle>
  );
};

DialogTitle.propTypes = {
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

export default DialogTitle;
