import React from "react";
import { DialogContent as MUIDialogContent } from "@mui/material";
import PropTypes from "prop-types";

const DialogContent = ({ children, dividers, classes, sx, ...props }) => {
  return (
    <MUIDialogContent dividers={dividers} classes={classes} sx={sx} {...props}>
      {children}
    </MUIDialogContent>
  );
};

DialogContent.propTypes = {
  children: PropTypes.node,
  dividers: PropTypes.bool,
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

export default DialogContent;
