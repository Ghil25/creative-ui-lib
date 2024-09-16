import React from "react";
import Badge from "@mui/material/Badge";

function NMSBadge({
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
    <Badge
      color={color}
      variant={badgeVariant}
      overlap={overlap}
      anchorOrigin={anchorOrigin}
      badgeContent={badgeContent}
      max={max}
      {...props}
    >
      {children}
    </Badge>
  );
}

export default NMSBadge;
