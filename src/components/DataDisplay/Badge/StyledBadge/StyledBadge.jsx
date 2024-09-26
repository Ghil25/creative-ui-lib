import React from "react";
import Badge from "../Badge";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledBadge = ({
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
  slot,
  variant,
  ...props
}) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: color,
      color: color,
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
      badgeVariant={badgeVariant}
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
      slot={slot}
      variant={variant}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

StyledBadge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  badgeVariant: PropTypes.oneOf(["standard", "dot"]),
  overlap: PropTypes.oneOf(["circular", "rectangular"]),
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "right"]),
  }),
  badgeContent: PropTypes.node,
  max: PropTypes.number,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  classes: PropTypes.object,
  component: PropTypes.elementType,
  invisible: PropTypes.bool,
  showZero: PropTypes.bool,
  slotProps: PropTypes.object,
  slot: PropTypes.node,
  variant: PropTypes.oneOf(["standard", "dot"]),
};

export default StyledBadge;
