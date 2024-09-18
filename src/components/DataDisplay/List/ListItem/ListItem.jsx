import React from "react";
import { ListItem as MUIListItem } from "@mui/material";
import PropTypes from "prop-types";

const ListItem = ({
  alignItems,
  children,
  classes,
  component,
  components,
  componentsProps,
  containerProps,
  dense,
  disableGutters,
  disablePadding,
  divider,
  secondaryAction,
  slotProps,
  slot,
  sx,
  ...props
}) => {
  return (
    <MUIListItem
      alignItems={alignItems}
      children={children}
      classes={classes}
      component={component}
      dense={dense}
      disableGutters={disableGutters}
      disablePadding={disablePadding}
      divider={divider}
      secondaryAction={secondaryAction}
      slotProps={slotProps}
      slot={slot}
      sx={sx}
      {...props}
    >
      {children}
    </MUIListItem>
  );
};

ListItem.propTypes = {
  alignItems: PropTypes.oneOf(["center", "flex-start"]),
  children: PropTypes.node,
  component: PropTypes.elementType,
  secondaryAction: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...ListItem.PropTypes,
};

// ListItem.defaultProps = {
//   alignItems: "center",
//   children: "NMS ListItem",
// };

export default ListItem;
