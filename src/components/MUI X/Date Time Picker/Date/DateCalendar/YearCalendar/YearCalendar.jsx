import React from "react";
import { YearCalendar as MUIYearCalendar } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const YearCalendar = ({
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
    <MUIYearCalendar
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

YearCalendar.propTypes = {
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
  ...MUIYearCalendar.PropTypes,
};

export default YearCalendar;
