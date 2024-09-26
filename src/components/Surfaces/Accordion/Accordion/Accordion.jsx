import React from "react";
import { Accordion as MUIAccordion } from "@mui/material";
import PropTypes from "prop-types";

const Accordion = ({
  children,
  expanded,
  onChange,
  square,
  slotProps,
  slots,
  sx,
  ...props
}) => {
  return (
    <MUIAccordion
      expanded={expanded}
      onChange={onChange}
      square={square}
      slotProps={slotProps}
      slots={slots}
      sx={sx}
      {...props}
    >
      {children}
    </MUIAccordion>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  onChange: PropTypes.func,
  square: PropTypes.bool,
  slotProps: PropTypes.shape({
    transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
  slots: PropTypes.shape({
    transition: PropTypes.elementType,
  }),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...MUIAccordion.PropTypes,
};

export default Accordion;
