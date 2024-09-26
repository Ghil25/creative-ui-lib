import React from "react";
import { CardActionArea as MUICardActionArea } from "@mui/material";
import PropTypes from "prop-types";

const CardActionArea = ({ children, sx, ...props }) => {
  return (
    <MUICardActionArea sx={sx} {...props}>
      {children}
    </MUICardActionArea>
  );
};

CardActionArea.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...MUICardActionArea.PropTypes,
};

export default CardActionArea;
