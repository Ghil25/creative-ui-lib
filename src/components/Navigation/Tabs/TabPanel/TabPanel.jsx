import React from "react"
import PropTypes from "prop-types"
import {TabPanel as MUITabPanel} from "@mui/lab"
import ThemeProvider from "../../../../ThemeProvider"



const TabPanel = ({
    value,
    children,
    classes,
    keepMounted = false,
    sx,
    ...props
}) => {
    return (
        <ThemeProvider>
            <MUITabPanel
            value={value}
            classes={classes}
            keepMounted={keepMounted}
            sx={sx}
            {...props}
            >
                {children}
            </MUITabPanel>
        </ThemeProvider>
    )
}


TabPanel.propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node,
    classes: PropTypes.object,
    keepMounted: PropTypes.bool,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
}

export default TabPanel