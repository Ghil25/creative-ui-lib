import React from "react";
import { StaticTimePicker as MUIStaticTimePicker } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const StaticTimePicker = ({
  className,
  dayOfWeekFormatter,
  defaultValue,
  format,
  formatDensity,
  label,
  name,
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
    <MUIStaticTimePicker
      className={className}
      dayOfWeekFormatter={dayOfWeekFormatter}
      defaultValue={defaultValue}
      format={format}
      formatDensity={formatDensity}
      label={label}
      name={name}
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

StaticTimePicker.propTypes = {
  className: PropTypes.string,
  dayOfWeekFormatter: PropTypes.func,
  defaultValue: PropTypes.any,
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  openTo: PropTypes.oneOf(["hours", "minutes", "seconds"]),
  orientation: PropTypes.oneOf(["landscape", "portrait"]),
  referenceDate: PropTypes.any,
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
  timezone: PropTypes.string,
  value: PropTypes.any,
  view: PropTypes.oneOf(["hours", "minutes", "seconds"]),
  views: PropTypes.arrayOf(["hours", "minutes", "seconds"]),
  ...MUIStaticTimePicker.propTypes,
};

export default StaticTimePicker;
