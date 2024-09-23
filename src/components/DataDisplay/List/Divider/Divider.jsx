import React from "react";
import { Divider as MUIDivider } from "@mui/material";

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

export default Divider;
