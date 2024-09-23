import React from "react";
import { ListSubheader as MUIListSubheader } from "@mui/material";
import PropTypes from "prop-types";

const ListSubheader = ({
  children,
  color,
  component,
  sx,
  classes,
  ...props
}) => {
  return (
    <MUIListSubheader
      color={color}
      component={component}
      sx={sx}
      classes={classes}
      {...props}
    >
      {children}
    </MUIListSubheader>
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
  ...ListSubheader.PropTypes,
};

ListSubheader.defaultProps = {
  children: "Subheader",
  color: "default",
};

export default ListSubheader;
