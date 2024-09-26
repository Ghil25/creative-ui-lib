import React from "react";
import { Stack as MUIStack } from "@mui/material";
import PropTypes from "prop-types";

function Stack({
  direction,
  component,
  spacing,
  children,
  sx,
  useFlexGap,
  ...props
}) {
  return (
    <MUIStack
      component={component}
      direction={direction}
      spacing={spacing}
      sx={sx}
      useFlexGap={useFlexGap}
      {...props}
    >
      {children}
    </MUIStack>
  );
}

Stack.propTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
  component: PropTypes.elementType,
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  useFlexGap: PropTypes.bool,
};

export default Stack;
