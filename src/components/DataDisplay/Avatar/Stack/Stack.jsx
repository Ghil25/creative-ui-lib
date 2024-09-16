import React from "react";
import Stack from "@mui/material/Stack";

function NMSStack({ direction, component, spacing, children, ...props }) {
  return (
    <Stack component={component} direction={direction} spacing={spacing}>
      {children}
    </Stack>
  );
}

export default NMSStack;
