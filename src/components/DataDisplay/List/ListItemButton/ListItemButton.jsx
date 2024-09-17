import React from "react";
import { ListItemButton as NMSListItemButton } from "@mui/material";
import PropTypes from "prop-types";

const ListItemButton = ({
  alignItems,
  autoFocus,
  children,
  component,
  dense,
  disabled,
  disableGutters,
  divider,
  focusVisibleClassName,
  selected,
  sx,
  ...props
}) => {
  return (
    <NMSListItemButton
      alignItems={alignItems}
      autoFocus={autoFocus}
      children={children}
      component={component}
      dense={dense}
      disabled={disabled}
      disableGutters={disableGutters}
      divider={divider}
      focusVisibleClassName={focusVisibleClassName}
      selected={selected}
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

// ListItemButton.defaultProps = {
//   alignItems: "center",
//   children: "NMS ListItemButton",
// };

export default ListItemButton;
