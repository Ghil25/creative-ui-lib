import React from "react"
import PropTypes from "prop-types"
import { TabPanel as MUITabPanel } from "@mui/material"
import ThemeProvider from "../../../../ThemeProvider"


const TabScrollButton  = ({
    direction,
    orientation,
    children,
    classes,
    disabled,
    slotProps,
    slots,
    sx,
    ...props
}) => {
    return (
        <ThemeProvider>
            <MUITabPanel
            direction={direction}
            orientation={orientation}
            classes={classes}
            disabled={disabled}
            slotProps={slotProps}
            slots={slots}
            sx={sx}
            {...props}
            >
                {children}
            </MUITabPanel>
        </ThemeProvider>
    )
}


TabScrollButton.propTypes = {
    direction: PropTypes.oneOf(["left", "right"]),
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),
    children: PropTypes.node,
    classes: PropTypes.object,
    disabled: PropTypes.bool,
    slotProps: PropTypes.object,
    slots: PropTypes.object,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
}

export default TabScrollButton;