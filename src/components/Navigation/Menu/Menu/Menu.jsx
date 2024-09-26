import React from "react"
import { Menu as MUIMenu } from "@mui/material"
import PropTypes from "prop-types"
import ThemeProvider from "../../../../ThemeProvider"


const Menu = ({
    open,
    anchorEl,
    autoFocus = true,
    children,
    classes,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    PopoverClasses,
    slotProps = {},
    slots = {},
    sx,
    transtionDuration = "auto",
    TransitionProps = {},
    variant = "selectedMenu",
    ...props
}) => {
    return (
        <ThemeProvider>
            <MUIMenu
            open={open}
            anchorEl={anchorEl}
            autoFocus={autoFocus}
            classes={classes}
            disableAutoFocusItem={disableAutoFocusItem}
            MenuListProps={MenuListProps}
            onClose={onClose}
            PopoverClasses={PopoverClasses}
            slotProps={slotProps}
            slots={slots}
            sx={sx}
            transitionDuration={transtionDuration}
            TransitionProps={TransitionProps}
            variant={variant}
            {...props}
            >
                {children}
            </MUIMenu>
        </ThemeProvider>
    )
}

Menu.propTypes = {
    open: PropTypes.bool,
    anchorEl: PropTypes.any,
    autoFocus: PropTypes.bool,
    children: PropTypes.node,
    classes: PropTypes.object,
    disableAutoFocusItem: PropTypes.bool,
    MenuListProps: PropTypes.object,
    onClose: PropTypes.func,
    PopoverClasses: PropTypes.object,
    slotProps: PropTypes.object,
    slots: PropTypes.object,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object,
        PropTypes.bool,
    ]),
    transtionDuration: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    TransitionProps: PropTypes.object,
    variant: PropTypes.string
}


export default Menu