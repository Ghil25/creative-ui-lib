import React from "react";
import { Chip as MUIChip } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";

function Chip({
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
}) {
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
}

export default Chip;
