import React from "react";
import { Divider as MUIDivider } from "@mui/material";
import PropTypes from "prop-types";

const Divider = ({
  absolute,
  children,
  classes,
  component,
  flexItem,
  orientation,
  sx,
  textAlign,
  variant,
  ...props
}) => {
  return (
    <MUIDivider
      absolute={absolute}
      classes={classes}
      component={component}
      sx={sx}
      variant={variant}
      flexItem={flexItem}
      orientation={orientation}
      textAlign={textAlign}
      {...props}
    >
      {children}
    </MUIDivider>
  );
};

Divider.propTypes = {
  absolute: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object,
  component: PropTypes.elementType,
  flexItem: PropTypes.bool,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  variant: PropTypes.oneOf(["fullWidth", "inset", "middle"]),
};

export default Divider;
