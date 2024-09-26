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
      variant={variant}
      sx={sx}
      value={value}
      valueBuffer={valueBuffer}
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
