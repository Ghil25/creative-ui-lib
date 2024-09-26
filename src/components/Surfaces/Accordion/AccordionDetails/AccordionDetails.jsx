import React from "react";
import { AccordionDetails as MUIAccordionDetails } from "@mui/material";
import PropTypes from "prop-types";

const AccordionDetails = ({ children, sx, ...props }) => {
  return (
    <MUIAccordionDetails sx={sx} {...props}>
      {children}
    </MUIAccordionDetails>
  );
};

AccordionDetails.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...MUIAccordionDetails.PropTypes,
};

export default AccordionDetails;
