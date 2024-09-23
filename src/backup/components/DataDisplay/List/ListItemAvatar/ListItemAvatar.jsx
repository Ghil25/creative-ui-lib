import React from "react";
import { ListItemAvatar as MUIListItemAvatar } from "@mui/material";
import PropTypes from "prop-types";

const ListItemAvatar = ({ children, sx, ...props }) => {
  return (
    <MUIListItemAvatar sx={sx} {...props}>
      {children}
    </MUIListItemAvatar>
  );
};

ListItemAvatar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...ListItemAvatar.PropTypes,
};

// ListItemAvatar.default = {
//   children: "NMS ListItemAvatar",
// };

export default ListItemAvatar;
