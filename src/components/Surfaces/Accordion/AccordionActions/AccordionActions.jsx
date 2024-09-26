import React from "react";
import { AccordionActions as MUIAccordionActions } from "@mui/material";
import PropTypes from "prop-types";

const AccordionActions = ({ children, sx, ...props }) => {
  return (
    <MUIAccordionActions sx={sx} {...props}>
      {children}
    </MUIAccordionActions>
  );
};

AccordionActions.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...MUIAccordionActions.PropTypes,
};

export default AccordionActions;
