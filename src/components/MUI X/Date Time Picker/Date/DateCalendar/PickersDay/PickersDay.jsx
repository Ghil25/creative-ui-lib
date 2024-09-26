import React from "react";
import { PickersDay as MUIPickersDay } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const PickersDay = ({
  day,
  isFirstVisibleCell,
  isLastVisibleCell,
  outsideCurrentMonth,
  sx,
  ...props
}) => {
  return (
    <MUIPickersDay
      day={day}
      isFirstVisibleCell={isFirstVisibleCell}
      isLastVisibleCell={isLastVisibleCell}
      outsideCurrentMonth={outsideCurrentMonth}
      sx={sx}
      {...props}
    />
  );
};

PickersDay.propTypes = {
  day: PropTypes.any.isRequired,
  isFirstVisibleCell: PropTypes.bool.isRequired,
  isLastVisibleCell: PropTypes.bool.isRequired,
  outsideCurrentMonth: PropTypes.bool.isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default PickersDay;
