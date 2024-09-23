import React from "react";
import { AvatarGroup as MUIAvatarGroup } from "@mui/material";

function AvatarGroup({
  max,
  total,
  sx,
  children,
  classes,
  component,
  componentProps,
  renderSurplus,
  slotProps,
  slots,
  spacing,
  variant,
  ...props
}) {
  return (
    <MUIAvatarGroup
      max={max}
      total={total}
      sx={{ ...sx }}
      classes={classes}
      component={component}
      componentProps={componentProps}
      renderSurplus={renderSurplus}
      slotProps={slotProps}
      slots={slots}
      spacing={spacing}
      variant={variant}
      {...props}
    >
      {children}
    </MUIAvatarGroup>
  );
}

export default AvatarGroup;
