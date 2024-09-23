import React from "react";
import PropTypes from "prop-types";
import { Container as MuiContainer } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";

const Container = ({
    children, component, disableGutters, fixed, maxWidth, sx, ...props
}) => {
    return (
        <ThemeProvider>
            <MuiContainer component={component} disableGutters={disableGutters} fixed={fixed} maxWidth={maxWidth} sx={sx} {...props}>
            {children}
            </MuiContainer>
        </ThemeProvider>
    )
}

Container.propTypes = {
    children: PropTypes.node,
    component: PropTypes.elementType,
    disableGutters: PropTypes.bool,
    fixed: PropTypes.bool,
    maxWidth: PropTypes.oneOf(["mobile", "tablet", "laptop", "desktop", "largeDesktop"]),
    sx: {
        width: 100,
        height: 100,
        borderRadius: 1,
        bgcolor: 'primary.main',
        '&:hover': {
            bgcolor: 'primary.dark',
          },
    }
}

export default Container