import React from "react";
import PropTypes from "prop-types";
import { Stack as MuiStack } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";

const Stack = ({
    children,
    component,
    direction,
    divider,
    spacing,
    useFlexGap,
    sx,
    ...props
}) => {
    return (
        <ThemeProvider>
            <MuiStack
            component={component}
            direction={direction}
            divider={divider}
            spacing={spacing}
            useFlexGap={useFlexGap}
            sx={sx}  
            {...props}
            >{children}
            </MuiStack>
        </ThemeProvider>
    )
}

Stack.propTypes = {
    children: PropTypes.node,
    component: PropTypes.elementType,
    direction: PropTypes.oneOfType([
        PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
        PropTypes.shape({
            xs: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
            sm: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
            md: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
            lg: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
            xl: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
        })
    ]),
    divider: PropTypes.node,
    spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    useFlexGap: PropTypes.bool,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object,
        PropTypes.bool,
    ]),
}

export default Stack
