import React from "react";
import { Alert as MUIAlert } from "@mui/material";

const Alert = React.forwardRef(
  (
    {
      action,
      children,
      classes,
      closeText,
      color,
      components,
      componentProps,
      icon,
      iconMapping,
      onClose,
      role,
      severity,
      slotProps,
      slots,
      sx,
      variant,

      ...props
    },
    ref
  ) => {
    return (
      <MUIAlert
        ref={ref}
        action={action}
        classes={classes}
        closeText={closeText}
        color={color}
        components={components}
        componentsProps={componentProps}
        icon={icon}
        iconMapping={iconMapping}
        onClose={onClose}
        role={role}
        severity={severity}
        slotProps={slotProps}
        slots={slots}
        sx={sx}
        variant={variant}
        {...props}
      >
        {children}
      </MUIAlert>
    );
  }
);

export default Alert;
