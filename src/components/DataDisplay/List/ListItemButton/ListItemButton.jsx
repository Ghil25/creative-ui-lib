import React from "react";
import { ListItemButton as NMSListItemButton } from "@mui/material";
import PropTypes from "prop-types";

const ListItemButton = ({ alignItems, children, component, sx, fullWidth, ...props }) => {
  return (
    <NMSListItemButton
      alignItems={alignItems}
      component={component}
      fullwidth={fullWidth}
      sx={sx}
      {...props}
    >
      {children}
    </NMSListItemButton>
  );
};

ListItemButton.propTypes = {
  alignItems: PropTypes.oneOf(["center", "flex-start"]),
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
  ...NMSListItemButton.PropTypes,
};

ListItemButton.defaultProps = {
  alignItems: "center",
  children: "NMS ListItemButton",
};

export default ListItemButton;
