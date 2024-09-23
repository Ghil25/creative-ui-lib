import React from "react";
import { AlertTitle as MUIAlertTitle } from "@mui/material";

const MUIAlertTitle = ({ children, classes, sx }) => {
  return (
    <MUIAlertTitle classes={classes} sx={sx}>
      {children}{" "}
    </MUIAlertTitle>
  );
};
export default MUIAlertTitle;
