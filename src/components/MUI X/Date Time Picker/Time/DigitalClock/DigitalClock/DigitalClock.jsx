import React from "react";
import { DigitalClock as MUIDigitalClock } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const DigitalClock = ({
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
    <MUIDigitalClock
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

DigitalClock.propTypes = {
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  openTo: PropTypes.oneOf(["hours"]),
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
  timestep: PropTypes.number,
  timezone: PropTypes.string,
  value: PropTypes.any,
  view: PropTypes.oneOf(["hours"]),
  views: PropTypes.arrayOf(["hours"]),
  ...MUIDigitalClock.propTypes,
};

export default DigitalClock;
