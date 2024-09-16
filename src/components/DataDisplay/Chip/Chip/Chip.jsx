import React from "react";
import Chip from "@mui/material/Chip";
import ThemeProvider from "../../../../ThemeProvider";

function NMSChip({
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
      <Chip
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

export default NMSChip;
