import React from "react";
import Stack from "@mui/material/Stack";

function NMSStack({
  direction,
  component,
  spacing,
  children,
  sx,
  useFlexGap,
  ...props
}) {
  return (
    <Stack
      component={component}
      direction={direction}
      spacing={spacing}
      sx={sx}
      useFlexGap={useFlexGap}
      {...props}
    >
      {children}
    </Stack>
  );
}

export default NMSStack;
