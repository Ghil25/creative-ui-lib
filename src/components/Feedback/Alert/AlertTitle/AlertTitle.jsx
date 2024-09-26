import React from "react";
import { AlertTitle as MUIAlertTitle } from "@mui/material";
import PropTypes from "prop-types";

const AlertTitle = ({ children, classes, sx }) => {
  return (
    <MUIAlertTitle classes={classes} sx={sx}>
      {children}
    </MUIAlertTitle>
  );
};

AlertTitle.propTypes = {
  children: PropTypes.node,
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

export default AlertTitle;
