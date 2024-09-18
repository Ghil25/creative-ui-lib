import React from "react";
import { Chip as MUIChip } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";

function Chip({
  label,
  variant,
  disabled,
  clickable,
  color,
  sx,
  onDelete,
  component,
  href,
  avatar,
  icon,
  size,
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
        href={href}
        avatar={avatar}
        icon={icon}
        size={size}
      />
    </ThemeProvider>
  );
}

export default Chip;
