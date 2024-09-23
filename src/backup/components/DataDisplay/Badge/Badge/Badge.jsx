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
      {...props}
    >
      {children}
    </MUIBadge>
  );
}

export default Badge;
