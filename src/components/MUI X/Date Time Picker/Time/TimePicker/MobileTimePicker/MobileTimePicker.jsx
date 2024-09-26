import React from "react";
import {
  LocalizationProvider,
  MobileTimePicker as MUIMobileTimePicker,
} from "@mui/x-date-pickers";
import PropTypes from "prop-types";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// const ClockIcon = () => {
//   return (
//     <Icon
//       solariconset={SolarIconSet.ClockCircle}
//       color={"secondary"}
//       size={24}
//       iconStyle={"BoldDuotone"}
//     />
//     <Icon color={"secondary"}>
//       <SolarIconSet.ClockCircle size={24} iconStyle="BoldDuotone" />
//     </Icon>
//   );
// };

const MobileTimePicker = ({
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
  timezone,
  value,
  view,
  views,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIMobileTimePicker
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
        timezone={timezone}
        value={value}
        view={view}
        views={views}
        {...props}
      />
    </LocalizationProvider>
  );
};

MobileTimePicker.propTypes = {
  className: PropTypes.string,
  dayOfWeekFormatter: PropTypes.func,
  defaultValue: PropTypes.any,
  format: PropTypes.string,
  formatDensity: PropTypes.oneOf(["dense", "spacious"]),
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  openTo: PropTypes.oneOf(["hours", "meridiem", "minutes", "seconds"]),
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
  timezone: PropTypes.string,
  value: PropTypes.any,
  view: PropTypes.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  views: PropTypes.arrayOf(["hours", "minutes", "seconds"]),
  ...MUIMobileTimePicker.propTypes,
};

// MobileTimePicker.defaultProps = {
//   slotProps: {
//     textField: {
//       InputProps: {
//         endAdornment: <ClockIcon />,
//       },
//     },
//   },
// };

export default MobileTimePicker;
