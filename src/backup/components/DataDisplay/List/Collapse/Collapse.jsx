import React from "react";
import { Collapse as MUICollapse } from "@mui/material";

const Collapse = ({
  addEndListener,
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
      timeout={timeout}
      {...props}
    >
      {children}
    </MUICollapse>
  );
};

export default Collapse;
