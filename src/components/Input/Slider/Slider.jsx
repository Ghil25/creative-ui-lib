import { Slider as NMSSlider } from "@mui/material";

const Slider = ({
  color,
  defaultValue,
  disabled,
  disableSwap,
  getAriaLabel,
  getAriaValueText,
  marks,
  max,
  min,
  name,
  onChange,
  onChangeCommitted,
  orientation,
  scale,
  shiftStep,
  size,
  step,
  sx,
  tabIndex,
  track,
  value,
  valueLabelDisplay,
  valueLabelFormat,
}) => {
  return (
    <NMSSlider
      color={color}
      defaultValue={defaultValue}
      disableSwap={disableSwap}
      disabled={disabled}
      getAriaLabel={getAriaLabel}
      getAriaValueText={getAriaValueText}
      marks={marks}
      max={max}
      min={min}
      name={name}
      onChange={onChange}
      onChangeCommitted={onChangeCommitted}
      orientation={orientation}
      scale={scale}
      shiftStep={shiftStep}
      size={size}
      step={step}
      sx={sx}
      tabIndex={tabIndex}
      track={track}
      value={value}
      valueLabelDisplay={valueLabelDisplay}
      valueLabelFormat={valueLabelFormat}
    />
  );
};

export default Slider;
