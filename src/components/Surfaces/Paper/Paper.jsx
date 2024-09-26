import React from "react";
import { Paper as MUIPaper } from "@mui/material";
import PropTypes from "prop-types";

const Paper = ({
  children,
  component,
  elevation,
  square,
  sx,
  variant,
  fullWidth,
  ...props
}) => {
  return (
    <MUIPaper
      component={component}
      elevation={elevation}
      square={square}
      sx={sx}
      variant={variant}
      {...props}
    >
      {children}
    </MUIPaper>
  );
};

Paper.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  elevation: PropTypes.number,
  square: PropTypes.bool,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(["elevation", "outlined"]),
    PropTypes.string,
  ]),
};

export default Paper;
