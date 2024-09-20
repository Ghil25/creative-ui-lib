import { LinearProgress as MUILinearProgress } from "@mui/material";
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
    <MUILinearProgress
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
