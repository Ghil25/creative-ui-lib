import React from "react";
import { StaticDateTimePicker as MUIStaticDateTimePicker } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const StaticDateTimePicker = ({
  className,
  dayOfWeekFormatter,
  defaultValue,
  onChange,
  openTo,
  orientation,
  referenceDate,
  slotProps,
  slots,
  sx,
  timezone,
  value,
  view,
  views,
  ...props
}) => {
  return (
    <MUIStaticDateTimePicker
      className={className}
      dayOfWeekFormatter={dayOfWeekFormatter}
      defaultValue={defaultValue}
      onChange={onChange}
      openTo={openTo}
      orientation={orientation}
      referenceDate={referenceDate}
      slotProps={slotProps}
      slots={slots}
      sx={sx}
      timezone={timezone}
      value={value}
      view={view}
      views={views}
      {...props}
    />
  );
};

StaticDateTimePicker.propTypes = {
  className: PropTypes.string,
  dayOfWeekFormatter: PropTypes.func,
  defaultValue: PropTypes.any,
  format: PropTypes.string,
  formatDensity: PropTypes.oneOf(["dense", "spacious"]),
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  openTo: PropTypes.oneOf([
    "day",
    "hours",
    "meridiem",
    "minutes",
    "month",
    "seconds",
    "year",
  ]),
  orientation: PropTypes.oneOf(["landscape", "portrait"]),
  referenceDate: PropTypes.any,
  selectedSections: PropTypes.oneOfType([
    PropTypes.oneOf([
      "all",
      "day",
      "hours",
      "meridiem",
      "minutes",
      "month",
      "seconds",
      "weekDay",
      "year",
    ]),
    PropTypes.number,
    PropTypes.shape({
      startIndex: PropTypes.number,
      endIndex: PropTypes.number,
    }),
  ]),
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  thresholdToRenderTimeInASingleColumn: PropTypes.number,
  timeSteps: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }),
  timezone: PropTypes.string,
  value: PropTypes.any,
  view: PropTypes.oneOf(["day", "month", "year"]),
  views: PropTypes.arrayOf([
    "day",
    "hours",
    "minutes",
    "month",
    "seconds",
    "year",
  ]),
  ...MUIStaticDateTimePicker.PropTypes,
};

export default StaticDateTimePicker;
