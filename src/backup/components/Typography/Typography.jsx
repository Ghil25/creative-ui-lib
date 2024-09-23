import React from "react";
import { Typography as MUITypography } from "@mui/material";
import ThemeProvider from "../../ThemeProvider";

const Typography = ({
  align,
  children,
  color,
  component,
  gutterBottom,
  noWrap,
  paragraph,
  sx,
  variant,
  variantMapping,
  ...props
}) => {
  return (
    <ThemeProvider>
      <MUITypography
        align={align}
        color={color}
        component={component}
        gutterBottom={gutterBottom}
        noWrap={noWrap}
        paragraph={paragraph}
        sx={sx}
        variant={variant}
        variantMapping={variantMapping}
        {...props}
      >
        {children}
      </MUITypography>
    </ThemeProvider>
  );
};

export default Typography;
