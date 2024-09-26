import React from "react";
import { MultiSectionDigitalClock as MUIMultiSectionDigitalClock } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const MultiSectionDigitalClock = ({
  defaultValue,
  onChange,
  openTo,
  referenceDate,
  slotProps,
  slots,
  sx,
  timeStep,
  timezone,
  value,
  view,
  views,
  ...props
}) => {
  return (
    <MUIMultiSectionDigitalClock
      defaultValue={defaultValue}
      onChange={onChange}
      openTo={openTo}
      referenceDate={referenceDate}
      slotProps={slotProps}
      slots={slots}
      sx={sx}
      timestep={timeStep}
      timezone={timezone}
      value={value}
      view={view}
      views={views}
      {...props}
    />
  );
};

MultiSectionDigitalClock.propTypes = {
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  openTo: PropTypes.oneOf(["hours", "meridiem", "minutes", "seconds"]),
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
  timestep: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }),
  timezone: PropTypes.string,
  value: PropTypes.any,
  view: PropTypes.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  views: PropTypes.arrayOf(["hours", "meridiem", "minutes", "seconds"]),
  ...MUIMultiSectionDigitalClock.propTypes,
};

export default MultiSectionDigitalClock;
