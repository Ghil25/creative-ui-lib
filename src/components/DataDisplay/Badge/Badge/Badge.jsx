import React from "react";
import { Badge as MUIBadge } from "@mui/material";

function Badge({
  children,
  color,
  badgeVariant,
  overlap,
  anchorOrigin,
  badgeContent,
  max,
  sx,
  classes,
  component,
  invisible,
  showZero,
  slotProps,
  slots,
  variant,
  ...props
}) {
  return (
    <MUIBadge
      color={color}
      variant={badgeVariant}
      overlap={overlap}
      anchorOrigin={anchorOrigin}
      badgeContent={badgeContent}
      max={max}
      sx={sx}
      classes={classes}
      component={component}
      invisible={invisible}
      showZero={showZero}
      slotProps={slotProps}
      slots={slots}
      {...props}
    >
      {children}
    </MUIBadge>
  );
}

export default Badge;
