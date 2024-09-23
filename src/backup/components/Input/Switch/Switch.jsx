import React from "react";
import { Switch as MUISwitch } from "@mui/material";

const Switch = ({
  checked,
  checkedIcon,
  color,
  defaultChecked,
  disabled,
  disableRipple,
  edge,
  icon,
  id,
  inputProps,
  inputRef,
  onChange,
  required,
  size,
  sx,
  value,
  ...props
}) => {
  return <MUISwitch {...props} />;
};

export default Switch;
