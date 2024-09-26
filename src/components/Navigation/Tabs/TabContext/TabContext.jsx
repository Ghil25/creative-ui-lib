import React from "react"
import PropTypes from "prop-types"
import { TabContext as MUITabContext } from "@mui/lab"
import ThemeProvider from "../../../../ThemeProvider"

const TabContext = ({ 
    value,
    children,
    ...props
}) => {
    return (
        <ThemeProvider>
            <MUITabContext value={value} {...props}>
                {children}
            </MUITabContext>
        </ThemeProvider>
    )
}

TabContext.propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default TabContext
