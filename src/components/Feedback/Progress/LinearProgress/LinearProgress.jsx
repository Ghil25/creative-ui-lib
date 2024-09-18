import { LinearProgress as MuiLinearProgress } from "@mui/material";
import React from "react";

const LinearProgress = ({
  classes,
  color,
  sx,
  value,
  valueBuffer,
  variant,
  ...props
}) => {
  return (
    <LinearProgress
      classes={classes}
      color={color}
      sx={sx}
      value={value}
      valueBuffer={valueBuffer}
      variant={variant}
      {...props}
    />
  );
};

export default LinearProgress;
