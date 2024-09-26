import { SnackbarContent as MUISnackbarContent } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const SnackbarContent = ({ action, classes, message, role, sx, ...props }) => {
  return (
    <MUISnackbarContent
      action={action}
      classes={classes}
      message={message}
      role={role}
      sx={sx}
      {...props}
    />
  );
};

SnackbarContent.propTypes = {
  action: PropTypes.node,
  classes: PropTypes.object,
  message: PropTypes.node.isRequired,
  role: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default SnackbarContent;
