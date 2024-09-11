import React from "react";
import PropTypes from "prop-types";
import { Button as MUIButton } from "@mui/material";
import ThemeProvider from "../../../ThemeProvider"

const Button = ({
    label="Button", 
    variant="contained", 
    disabled=false,
    color="primary",
    size= "medium", 
    children,
    ...props}) => {
    return (
      <ThemeProvider>
        <MUIButton
        variant={variant}
        color={color}
        disabled={disabled}
        size={size}
        {...props}
        >{children || label}</MUIButton>
      </ThemeProvider>
    )
}


Button.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(["contained", "outlined", "text"]),
    disabled: PropTypes.bool,
    color: PropTypes.oneOfType([
        PropTypes.oneOf([
          "inherit",
          "default",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ]),
        PropTypes.string,
      ]),
    size: PropTypes.oneOf(["small", "medium", "large"])

    
}

export default Button

