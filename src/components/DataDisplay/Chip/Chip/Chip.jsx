import React from "react";
import { Chip as MUIChip } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";
import PropTypes from "prop-types";

const Chip = ({
  avatar,
  classes,
  clickable,
  color,
  component,
  deleteIcon,
  disabled,
  icon,
  label,
  onDelete,
  size,
  skipFocusWhenDisabled,
  sx,
  variant,
  ...props
}) => {
  return (
    <ThemeProvider>
      <MUIChip
        {...props}
        label={label}
        variant={variant}
        disabled={disabled}
        clickable={clickable}
        color={color}
        sx={sx}
        onDelete={onDelete}
        component={component}
        avatar={avatar}
        icon={icon}
        size={size}
        skipFocusWhenDisabled={skipFocusWhenDisabled}
        deleteIcon={deleteIcon}
        classes={classes}
        {...props}
      />
    </ThemeProvider>
  );
};

Chip.propTypes = {
  avatar: PropTypes.element,
  classes: PropTypes.object,
  clickable: PropTypes.bool,
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  component: PropTypes.elementType,
  deleteIcon: PropTypes.element,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.node,
  onDelete: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium"]),
  skipFocusWhenDisabled: PropTypes.bool,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
};

export default Chip;
