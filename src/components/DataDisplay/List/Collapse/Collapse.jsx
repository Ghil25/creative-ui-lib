import React from "react";
import { Collapse as NMSCollapse } from "@mui/material";

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
    <NMSCollapse
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
    </NMSCollapse>
  );
};

export default Collapse;
