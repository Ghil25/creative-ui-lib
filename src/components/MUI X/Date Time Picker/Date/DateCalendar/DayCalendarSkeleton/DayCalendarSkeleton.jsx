import React from "react";
import { DayCalendarSkeleton as MUIDayCalendarSkeleton } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const DayCalendarSkeleton = ({ sx, ...props }) => {
  return <MUIDayCalendarSkeleton sx={sx} {...props} />;
};

DayCalendarSkeleton.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default DayCalendarSkeleton;
