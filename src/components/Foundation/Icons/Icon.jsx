import React from "react";
import * as SolarIconSet from "solar-icon-set";
import PropTypes from "prop-types";
import { Icon as MuiIcon } from "@mui/material";
import ThemeProvider from "../../../ThemeProvider";

const Icon = ({ name = "Home", size, iconStyle, color }) => {
  const IconComponent = SolarIconSet[name];
  if (!IconComponent) return null;
  return (
    <ThemeProvider>
      <MuiIcon
        color={color}
        style={{ fontSize: size, widdth: size, height: size }}
      >
        <IconComponent iconStyle={iconStyle} size={size} />
      </MuiIcon>
    </ThemeProvider>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconStyle: PropTypes.oneOf(["Bold", "BoldDuotone", "Outline"]),
  color: PropTypes.oneOf([
    "inherit",
    "action",
    "disabled",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ]),
};

export default Icon;
