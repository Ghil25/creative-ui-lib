import React from "react";
import Divider from "@mui/material/Divider";

const ListDivider = ({ sx, children, TextAlign, ...props }) => {
  return (
    <Divider sx={sx} TextAlign={TextAlign} {...props}>
      {children}
    </Divider>
  );
};

export default ListDivider;
