import React from "react";
import { Card as MUICard } from "@mui/material";
import PropTypes from "prop-types";

const Card = ({ clickable, children, sx, ...props }) => {
  return (
    <MUICard clickable={clickable} sx={sx} {...props}>
      {children}
    </MUICard>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...MUICard.PropTypes,
};

export default Card;
