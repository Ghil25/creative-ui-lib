import { IconButton as MUIconButton } from "@mui/material";
import React from "react";

const IconButton = ({
  children,
  classes,
  color,
  disabled,
  disableFocusRipple,
  disableRipple,
  edge,
  size,
  sx,
  ...props
}) => {
  return (
    <MUIconButton
      classes={classes}
      color={color}
      disabled={disabled}
      sx={sx}
      size={size}
      edge={edge}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      {...props}
    >
      {children}
    </MUIconButton>
  );
};

export default IconButton;
