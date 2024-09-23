import React from "react";
import Badge from "../Badge";
import { styled } from "@mui/material/styles";

function StyledBadge({
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
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: { color },
      color: { color },
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <StyledBadge
      color={color}
      variant={badgeVariant}
      overlap={overlap}
      anchorOrigin={anchorOrigin}
      badgeContent={badgeContent}
      max={max}
      {...props}
    >
      {children}
    </StyledBadge>
  );
}

export default StyledBadge;
