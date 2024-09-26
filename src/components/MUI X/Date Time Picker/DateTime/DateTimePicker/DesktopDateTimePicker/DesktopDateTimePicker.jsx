import React from "react";
import {
  LocalizationProvider,
  DesktopDateTimePicker as MUIDesktopDateTimePicker,
} from "@mui/x-date-pickers";
import PropTypes from "prop-types";
import Icon from "../../../../../Foundation/Icons/Icon";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// const CalendarIcon = () => {
//   return (
//     <Icon color={"secondary"}>
//       <SolarIconSet.Calendar size={24} iconStyle="BoldDuotone" />
//     </Icon>
//   );
// };

const DesktopDateTimePicker = ({
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
  selectedSections,
  slotProps,
  slots,
  sx,
  thresholdToRenderTimeInASingleColumn,
  timeSteps,
  timezone,
  value,
  view,
  views,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIDesktopDateTimePicker
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
        selectedSections={selectedSections}
        slotProps={slotProps}
        slots={slots}
        sx={sx}
        thresholdToRenderTimeInASingleColumn={
          thresholdToRenderTimeInASingleColumn
        }
        timeSteps={timeSteps}
        timezone={timezone}
        value={value}
        view={view}
        views={views}
        {...props}
      />
    </LocalizationProvider>
  );
};

DesktopDateTimePicker.propTypes = {
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
  ...MUIDesktopDateTimePicker.PropTypes,
};

// DesktopDateTimePicker.defaultProps = {
//   slots: {
//     openPickerIcon: CalendarIcon,
//   },
// };

export default DesktopDateTimePicker;
