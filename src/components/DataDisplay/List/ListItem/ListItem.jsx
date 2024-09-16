import React from "react";
import { ListItem as NMSListItem } from "@mui/material";
import PropTypes from "prop-types";

const ListItem = ({
  alignItems,
  children,
  component,
  secondaryAction,
  sx,
  fullWidth,
  ...props
}) => {
  return (
    <NMSListItem
      alignItems={alignItems}
      component={component}
      secondaryAction={secondaryAction}
      sx={sx}
      fullwidth={fullWidth}
      {...props}
    >
      {children}
    </NMSListItem>
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
  ...NMSListItem.PropTypes,
};

ListItem.defaultProps = {
  alignItems: "center",
  children: "NMS ListItem",
};

export default ListItem;
