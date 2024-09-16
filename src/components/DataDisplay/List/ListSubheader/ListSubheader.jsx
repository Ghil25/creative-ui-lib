import React from "react";
import { ListSubheader as NMSListSubheader } from "@mui/material";
import PropTypes from "prop-types";

const ListSubheader = ({ children, color, component, sx, ...props }) => {
  return (
    <NMSListSubheader color={color} component={component} sx={sx} {...props}>
      {children}
    </NMSListSubheader>
  );
};

ListSubheader.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["inherit", "primary", "secondary", "default"]),
  component: PropTypes.elementType,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...NMSListSubheader.PropTypes,
};

ListSubheader.defaultProps = {
  children: "Subheader",
  color: "default",
};

export default ListSubheader;
