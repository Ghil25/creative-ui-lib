import React from "react";
import { AvatarGroup as MUIAvatarGroup } from "@mui/material";
import PropTypes from "prop-types";

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

AvatarGroup.propTypes = {
  max: PropTypes.number,
  total: PropTypes.number,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  children: PropTypes.node,
  classes: PropTypes.object,
  component: PropTypes.elementType,
  componentProps: PropTypes.object,
  renderSurplus: PropTypes.func,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(["circular", "rounded", "square"]),
};

export default AvatarGroup;
