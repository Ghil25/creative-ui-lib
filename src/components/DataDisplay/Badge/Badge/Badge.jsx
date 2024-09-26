import React from "react";
import { Badge as MUIBadge } from "@mui/material";
import PropTypes from "prop-types";

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

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
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
  slots: PropTypes.object,
  variant: PropTypes.oneOf(["standard", "dot"]),
};

export default Badge;
