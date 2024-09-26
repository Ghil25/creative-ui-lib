import React from "react";
import PropTypes from "prop-types"
import { MenuItem as MUIMenuItem } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";


const MenuItem = ({
    autoFocus = false,
    children,
    classes,
    component,
    dense = false,
    disableGutters = false,
    divider = false,
    focusVisibleClassName,
    selected = false,
    sx,
    ...props
}) => {
    return (
        <ThemeProvider>
            <MUIMenuItem
            autoFocus={autoFocus}
            classes={classes}
            component={component}
            dense={dense}
            disableGutters={disableGutters}
            divider={divider}
            focusVisibleClassName={focusVisibleClassName}
            selected={selected}
            sx={sx}
            {...props}
            >{children}</MUIMenuItem>
        </ThemeProvider>
    )
}

MenuItem.propTypes = {
    autoFocus: PropTypes.bool,
    children: PropTypes.node,
    classes: PropTypes.object,
    component: PropTypes.node,
    dense: PropTypes.bool,
    disableGutters: PropTypes.bool,
    divider: PropTypes.bool,
    focusVisibleClassName: PropTypes.string,
    selected: PropTypes.bool,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object,
    ]),

}

export default MenuItem