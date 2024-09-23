import React from "react";
import PropTypes from "prop-types";
import { Box as MuiBox } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";

const Box =({
    children, component, sx, ...props
}) => {
    return (
        <ThemeProvider>
            <MuiBox component={component} sx={sx} {...props}>{children}</MuiBox>
        </ThemeProvider>
    )
}

Box.propTypes = {
    children: PropTypes.node,
    component: PropTypes.elementType,
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
      PropTypes.bool,
    ]),
}

export default Box