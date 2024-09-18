import React from "react";
import { List as MUIList } from "@mui/material";
import PropTypes from "prop-types";

const List = ({
  children,
  classes,
  component,
  dense,
  disablePadding,
  subheader,
  sx,
  ...props
}) => {
  return (
    <MUIList
      component={component}
      classes={classes}
      dense={dense}
      disablePadding={disablePadding}
      subheader={subheader}
      sx={sx}
      {...props}
    >
      {children}
    </MUIList>
  );
};

List.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  disablePadding: PropTypes.bool,
  subheader: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

// List.defaultProps = {
//   children: "NMS List",
//   disablePadding: false,
// };

export default List;
