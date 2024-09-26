import React from "react";
import PropTypes from "prop-types";
import { Tabs as MUITabs } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";

const Tabs = ({
  action,
  allowScrollButtonsMobile = false,
  centered = false,
  children,
  component,
  indicatorColor = "primary",
  onChange,
  orientation,
  ScrollButtonComponent,
  scrollButtons = "auto",
  selectionFollowsFocus,
  // slotsProps,
  slots,
  sx,
  TabIndicatorProps,
  TabScrollButtonProps,
  textColor = "primary",
  value,
  variant = "standard",
  visibleScrollbar = false,
  ...props
}) => {
  return (
    <ThemeProvider>
      <MUITabs
        action={action}
        allowScrollButtonsMobile={allowScrollButtonsMobile}
        centered={centered}
        component={component}
        indicatorColor={indicatorColor}
        onChange={onChange}
        orientation={orientation}
        ScrollButtonComponent={ScrollButtonComponent}
        scrollButtons={scrollButtons}
        selectionFollowsFocus={selectionFollowsFocus}
        // slotsProps={slotsProps}
        slots={slots}
        sx={sx}
        TabIndicatorProps={TabIndicatorProps}
        TabScrollButtonProps={TabScrollButtonProps}
        textColor={textColor}
        value={value}
        variant={variant}
        visibleScrollbar={visibleScrollbar}
        {...props}
      >
        {children}
      </MUITabs>
    </ThemeProvider>
  );
};

Tabs.propTypes = {
  action: PropTypes.func,
  allowScrollButtonsMobile: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  component: PropTypes.elementType,
  indicatorColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ]),
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  ScrollButtonComponent: PropTypes.elementType,
  // slotsProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  TabIndicatorProps: PropTypes.object,
  TabScrollButtonProps: PropTypes.object,
  textColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ]),
  value: PropTypes.any,
  variant: PropTypes.oneOf(["standard", "scrollable", "fullWidth"]),
  visibleScrollbar: PropTypes.bool,
};

export default Tabs;
