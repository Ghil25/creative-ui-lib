import { LinearProgress as MUILinearProgress } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const LinearProgress = ({
  classes,
  color,

  variant,
  sx,
  value,
  valueBuffer,
  ...props
}) => {
  return (
    <MUILinearProgress
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

LinearProgress.propTypes = {
  classes: PropTypes.object,
  color: PropTypes.oneOf(["inherit", "primary", "secondary"]),
  valueBuffer: PropTypes.number,

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

export default LinearProgress;
