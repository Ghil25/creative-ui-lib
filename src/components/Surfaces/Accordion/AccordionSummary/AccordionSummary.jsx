import React from "react";
import { AccordionSummary as MUIAccordionSummary } from "@mui/material";
import PropTypes from "prop-types";
import * as SolarIconSet from "solar-icon-set";

const AccordionSummary = ({ children, expandIcon, sx, ...props }) => {
  return (
    <MUIAccordionSummary expandIcon={expandIcon} sx={sx} {...props}>
      {children}
    </MUIAccordionSummary>
  );
};

AccordionSummary.propTypes = {
  children: PropTypes.node,
  expandIcon: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...MUIAccordionSummary.PropTypes,
};

AccordionSummary.defaultProps = {
  expandIcon: <SolarIconSet.AltArrowDown size={24} iconStyle="BoldDuotone" />,
};

export default AccordionSummary;
