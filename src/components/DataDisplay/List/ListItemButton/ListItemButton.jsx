import React from "react";
import { ListItemButton as MUIListItemButton } from "@mui/material";
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
    <MUIListItemButton
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
    </MUIListItemButton>
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
};

// ListItemButton.defaultProps = {
//   alignItems: "center",
//   children: "NMS ListItemButton",
// };

export default ListItemButton;
