import React from "react";
import PropTypes from "prop-types";
import { Grid2 as MuiGrid2 } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";

const Grid = ({
    children,
    columns,
    columnSpacing,
    container,
    direction,
    offset,
    rowSpacing,
    size,
    spacing,
    wrap,
    sx,
    ...props
}) => {
    return (    
        <ThemeProvider>
            <MuiGrid2
            columns={columns}
            columnSpacing={columnSpacing}
            container={container}
            direction={direction}
            offset={offset}
            rowSpacing={rowSpacing}
            size={size}
            spacing={spacing}
            wrap={wrap}
            sx={sx}
            {...props}
            >{children}</MuiGrid2>
        </ThemeProvider>
    )
}

Grid.propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    columnSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    container: PropTypes.bool,
    direction: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
    offset: PropTypes.number,
    rowSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number
        })    
    ]),
    spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
}

export default Grid