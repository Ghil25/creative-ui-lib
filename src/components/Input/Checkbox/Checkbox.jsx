import React from "react";
import { Checkbox as NMSCheckbox } from "@mui/material";

const Checkbox = ({ children, ...props }) => {
  return <NMSCheckbox {...props}>{children}</NMSCheckbox>;
};

export default Checkbox;
