import React from "react"
import {TabList as MUITabList} from "@mui/lab"
import PropTypes from "prop-types"
import ThemeProvider from "../../../../ThemeProvider"

const TabList =  ({
    children,
    ...props
}) => {
    <ThemeProvider>
        <MUITabList {...props}>{children}</MUITabList>
    </ThemeProvider>
}

TabList.propTypes = {
    children: PropTypes.node
}

export default TabList;

