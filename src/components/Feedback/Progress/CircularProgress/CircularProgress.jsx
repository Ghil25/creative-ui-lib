import { CircularProgress as MUICircularProgress } from "@mui/material";
import React from "react";

const CircularProgress = ({
  classes,
  color,
  disableShrink,
  size,
  thickness,
  variant,
  sx,
  value,
  ...props
}) => {
  return (
    <CircularProgress
      classes={classes}
      color={color}
      disableShrink={disableShrink}
      size={size}
      thickness={thickness}
      variant={variant}
      sx={sx}
      value={value}
      {...props}
    />
  );
};

export default CircularProgress;
