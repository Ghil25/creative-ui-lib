import React from "react";
import { MonthCalendar as MUIMonthCalendar } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const MonthCalendar = ({
  className,
  defaultValue,
  onChange,
  referenceDate,
  sx,
  timezone,
  value,
  ...props
}) => {
  return (
    <MUIMonthCalendar
      className={className}
      defaultValue={defaultValue}
      onChange={onChange}
      referenceDate={referenceDate}
      sx={sx}
      timezone={timezone}
      value={value}
      {...props}
    />
  );
};

MonthCalendar.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  referenceDate: PropTypes.any,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  timezone: PropTypes.string,
  value: PropTypes.any,
  ...MUIMonthCalendar.PropTypes,
};

export default MonthCalendar;
