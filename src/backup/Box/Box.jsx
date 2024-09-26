import React from "react";
import { Box as MUIBox } from "@mui/material";
import PropTypes from "prop-types";

const Box = ({ children, component, sx, ...props }) => {
  return (
    <MUIBox component={component} sx={sx} {...props}>
      {children}
    </MUIBox>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default Box;
