import React from "react";
import PropTypes from "prop-types";
import { TextField as MuiTextField } from "@mui/material";
import ThemeProvider from "../../../ThemeProvider";

const TextField = ({
  autoComplete,
  autoFocus,
  classes,
  color,
  defaultValue,
  disabled,
  error,
  fullWidth,
  helperText,
  id,
  label,
  margin,
  name,
  onChange,
  placeholder,
  required,
  rows,
  select,
  size,
  sx,
  value,
  variant,
  ...props
}) => {
  return (
    <MuiTextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      classes={classes}
      color={color}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      label={label}
      margin={margin}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      select={select}
      size={size}
      sx={sx}
      value={value}
      variant={variant}
      {...props}
    />
  );
};

export default TextField;
