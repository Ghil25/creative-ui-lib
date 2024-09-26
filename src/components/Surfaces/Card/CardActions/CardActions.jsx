import React from "react";
import { CardActions as MUICardActions } from "@mui/material";
import PropTypes from "prop-types";

const CardActions = ({ children, sx, ...props }) => {
  return (
    <MUICardActions sx={sx} {...props}>
      {children}
    </MUICardActions>
  );
};

CardActions.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...MUICardActions.PropTypes,
};

export default CardActions;
