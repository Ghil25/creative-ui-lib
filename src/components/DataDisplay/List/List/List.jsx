import React from "react";
import { List as NMSList } from "@mui/material";
import PropTypes from "prop-types";

const List = ({ children, component, disablePadding, subheader, sx, fullWidth, ...props }) => {
  return (
    <NMSList
      component={component}
      disablePadding={disablePadding}
      subheader={subheader}
      sx={sx}
      fullwidth={fullWidth}
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

List.defaultProps = {
  children: "NMS List",
  disablePadding: false,
};

export default List;
