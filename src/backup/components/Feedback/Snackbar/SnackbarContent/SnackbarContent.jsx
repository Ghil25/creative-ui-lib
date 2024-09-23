import { SnackbarContent as MUISnackbarContent } from "@mui/material";
import React from "react";

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

export default SnackbarContent;
