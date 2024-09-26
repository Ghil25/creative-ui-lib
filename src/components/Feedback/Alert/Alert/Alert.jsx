import React from "react";
import { Alert as MUIAlert } from "@mui/material";
import PropTypes from "prop-types";

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

Alert.propTypes = {
  action: PropTypes.element,
  children: PropTypes.node,
  classes: PropTypes.object,
  closeText: PropTypes.string,
  color: PropTypes.oneOf(["default", "error", "info", "success", "warning"]),
  components: PropTypes.object,
  componentProps: PropTypes.object,
  icon: PropTypes.element,
  iconMapping: PropTypes.object,
  onClose: PropTypes.func,
  role: PropTypes.string,
  severity: PropTypes.oneOf(["error", "info", "success", "warning"]),
  slotProps: PropTypes.object,
  slots: PropTypes.object,
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

export default Alert;
