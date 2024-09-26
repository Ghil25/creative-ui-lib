import React from "react"
import PropTypes from "prop-types"
import { Pagination as MUIPagination } from "@mui/material"
import ThemeProvider from "../../../../ThemeProvider"


const Pagination = ({
    boundaryCount = 1,
    classes,
    color = "standard",
    count = 1,
    defaultPage = 1,
    disabled = false,
    getItemAriaLabel,
    hideNextButton = false,
    hidePrevButton = false,
    onChange,
    page,
    renderItem,
    shape = "circular",
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    size = "medium",
    sx,
    variant = "text",
    ...props
}) => {
    return (
        <ThemeProvider>
            <MUIPagination
            boundaryCount={boundaryCount}
            classes={classes}
            color={color}
            count={count}
            defaultPage={defaultPage}
            disabled={disabled}
            getItemAriaLabel={getItemAriaLabel}
            hideNextButton={hideNextButton}
            hidePrevButton={hidePrevButton}
            onChange={onChange}
            page={page}
            renderItem={renderItem}
            shape={shape}
            showFirstButton={showFirstButton}
            showLastButton={showLastButton}
            siblingCount={siblingCount}
            size={size}
            sx={sx}
            variant={variant}
            {...props}
            />
        </ThemeProvider>
    )
}


Pagination.propTypes = {
    boundaryCount: PropTypes.number,
    classes: PropTypes.object,
    color: PropTypes.oneOf(["standard", "primary", "secondary", "error", "info", "success", "warning"]),
    count: PropTypes.number,
    defaultPage: PropTypes.number,
    disabled: PropTypes.bool,
    getItemAriaLabel: PropTypes.func,
    hideNextButton: PropTypes.bool,
    hidePrevButton: PropTypes.bool,
    onChange: PropTypes.func,
    page: PropTypes.number,
    renderItem: PropTypes.func,
    shape: PropTypes.oneOf(["circular", "rounded"]),
    showFirstButton: PropTypes.bool,
    showLastButton: PropTypes.bool,
    siblingCount: PropTypes.number,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object,
        PropTypes.bool,
      ]),
    variant: PropTypes.oneOf(["text", "outlined", "contained"]),
}

export default Pagination