import React from "react"
import PropTypes from "prop-types"
import { PaginationItem as MUIPaginationItem } from "@mui/material"
import ThemeProvider from "../../../../ThemeProvider"

const PaginationItem = ({
    classes,
    color = "standard",
    component,
    components = {},
    disabled = false,
    page,
    selected = false,
    shape = "circular",
    size = "medium",
    slotProps = {},
    slots = {},
    sx,
    type = "page",
    variant = "text",
    ...props
}) => {
    return (
        <ThemeProvider>
            <MUIPaginationItem
            classes={classes}
            color={color}
            component={component}
            components={components}
            disabled={disabled}
            page={page}
            selected={selected}
            shape={shape}
            size={size}
            slotProps={slotProps}
            slots={slots}
            sx={sx}
            type={type}
            variant={variant}
            {...props}
            />
        </ThemeProvider>
    )
}

PaginationItem.propTypes = {
    classes: PropTypes.object,
    color: PropTypes.string,
    component: PropTypes.any,
    components: PropTypes.object,
    disabled: PropTypes.bool,
    page: PropTypes.node,
    selected: PropTypes.bool,
    shape: PropTypes.oneOf(["circular", "rounded"]),
    size: PropTypes.string,
    slotProps: PropTypes.object,
    slots: PropTypes.elementType,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object,
        PropTypes.bool,
    ]),
    type: PropTypes.string,
    variant: PropTypes.string,
}

export default PaginationItem