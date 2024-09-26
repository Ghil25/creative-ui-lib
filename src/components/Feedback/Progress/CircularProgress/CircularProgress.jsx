import { CircularProgress as MUICircularProgress } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

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
    <MUICircularProgress
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

CircularProgress.propTypes = {
  classes: PropTypes.object,
  color: PropTypes.oneOf(["inherit", "primary", "secondary"]),
  disableShrink: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  thickness: PropTypes.number,
  variant: PropTypes.oneOf(["determinate", "indeterminate"]),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  value: PropTypes.number,
};

export default CircularProgress;
