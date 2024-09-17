import React from "react";
import { List as NMSList } from "@mui/material";
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
    <NMSList
      component={component}
      classes={classes}
      dense={dense}
      disablePadding={disablePadding}
      subheader={subheader}
      sx={sx}
      {...props}
    >
      {children}
    </NMSList>
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
