import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const NMSBox = ({ children, component, sx, ...props }) => {
  return (
    <NMSBox component={component} sx={sx} {...props}>
      {children}
    </NMSBox>
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
  ...NMSBox.propTypes,
};

export default NMSBox;
