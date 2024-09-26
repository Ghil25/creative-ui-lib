import React from "react"
import { MenuList as MUIMenuList } from "@mui/material"
import PropTypes from "prop-types"
import ThemeProvider from "../../../../ThemeProvider"


const MenuList = ({
    autoFocus = false,
    autoFocusItem = false,
    children,
    disabledItemsFocusable = false,
    disableListWrap = false,
    variant = 'selectedMenu',
    ...props 
}) => {
    return (
        <ThemeProvider>
            <MUIMenuList
            autoFocus={autoFocus}
            autoFocusItem={autoFocusItem}
            disabledItemsFocusable={disabledItemsFocusable}
            disableListWrap={disableListWrap}
            variant={variant}
            {...props}
            >
                {children}
            </MUIMenuList>
        </ThemeProvider>
    )
}

MenuList.propTypes = {
    autoFocus: PropTypes.bool,
    autoFocusItem: PropTypes.bool,
    disabledItemsFocusable: PropTypes.bool,
    disableListWrap: PropTypes.bool,
    variant: PropTypes.string
}

export default MenuList