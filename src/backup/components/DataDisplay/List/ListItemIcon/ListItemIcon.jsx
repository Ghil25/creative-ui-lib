import React from "react";
import { ListItemIcon as MUIListItemIcon } from "@mui/material";
import PropTypes from "prop-types";

const ListItemIcon = ({ children, sx, ...props }) => {
  return (
    <MUIListItemIcon sx={sx} {...props}>
      {children}
    </MUIListItemIcon>
  );
};

ListItemIcon.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

// ListItemIcon.defaultProps = {
//   children: <SolarIconSet.BoxMinimalistic size={24} iconStyle="BoldDuotone" />,
// };

export default ListItemIcon;
