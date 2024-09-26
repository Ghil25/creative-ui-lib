import React from "react";
import {
  LocalizationProvider,
  TimeField as MUITimeField,
} from "@mui/x-date-pickers";
import PropTypes from "prop-types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const TimeField = ({
  color,
  defaultValue,
  format,
  formatDensity,
  helperText,
  id,
  label,
  margin,
  name,
  onChange,
  referenceDate,
  selectedSections,
  size,
  slotProps,
  slots,
  sx,
  timezone,
  value,
  variant,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUITimeField
        color={color}
        defaultValue={defaultValue}
        format={format}
        formatDensity={formatDensity}
        helperText={helperText}
        id={id}
        label={label}
        margin={margin}
        name={name}
        onChange={onChange}
        referenceDate={referenceDate}
        selectedSections={selectedSections}
        size={size}
        slotProps={slotProps}
        slots={slots}
        sx={sx}
        timezone={timezone}
        value={value}
        variant={variant}
        {...props}
      />
    </LocalizationProvider>
  );
};

TimeField.propTypes = {
  color: PropTypes.oneOf([
    "error",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  defaultValue: PropTypes.any,
  format: PropTypes.string,
  formatDensity: PropTypes.oneOf(["dense", "spacious"]),
  helperText: PropTypes.node,
  id: PropTypes.string,
  label: PropTypes.node,
  margin: PropTypes.oneOf(["dense", "none", "normal"]),
  name: PropTypes.string,
  onChange: PropTypes.func,
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
  size: PropTypes.oneOf(["medium", "small"]),
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
  variant: PropTypes.oneOf(["filled", "oultined", "standard"]),
  ...MUITimeField.PropTypes,
};

export default TimeField;
