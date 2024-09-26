import React from "react";
import { Collapse as MUICollapse } from "@mui/material";
import PropTypes from "prop-types";

const Collapse = ({
  addEndListener,
  classes,
  children,
  collapsedSize,
  component,
  easing,
  orientation,
  sx,
  timeout,
  ...props
}) => {
  return (
    <MUICollapse
      addEndListener={addEndListener}
      collapsedSize={collapsedSize}
      component={component}
      easing={easing}
      orientation={orientation}
      sx={sx}
      classes={classes}
      timeout={timeout}
      {...props}
    >
      {children}
    </MUICollapse>
  );
};

Collapse.propTypes = {
  addEndListener: PropTypes.func,
  classes: PropTypes.object,
  children: PropTypes.node,
  collapsedSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  component: PropTypes.elementType,
  easing: PropTypes.string,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number,
    }),
  ]),
};

export default Collapse;
