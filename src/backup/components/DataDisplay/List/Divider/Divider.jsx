import React from "react";
import { Divider as MUIDivider } from "@mui/material";

const Divider = ({ sx, children, TextAlign, ...props }) => {
  return (
    <MUIDivider sx={sx} TextAlign={TextAlign} {...props}>
      {children}
    </MUIDivider>
  );
};

export default Divider;
