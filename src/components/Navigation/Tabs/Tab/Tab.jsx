import React from "react";
import PropTypes from "prop-types";
import { Tab as MUITab } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";

const Tab = ({
  classes,
  disabled = false,
  disableFocusRipple = false,
  disableRipple = false,
  icon,
  iconPosition = "top",
  label,
  sx,
  value,
  wrapped = false,
  ...props
}) => {
  return (
    <ThemeProvider>
      <MUITab
        classes={classes}
        disabled={disabled}
        disableFocusRipple={disableFocusRipple}
        icon={icon}
        iconPosition={iconPosition}
        label={label}
        sx={sx}
        value={value}
        wrapped={wrapped}
        {...props}
      />
    </ThemeProvider>
  );
};

Tab.propTypes = {
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["top", "start", "bottom", "end"]),
  label: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  value: PropTypes.any,
  wrapped: PropTypes.bool,
};

export default Tab;
