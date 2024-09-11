import React from "react"
import PropTypes from "prop-types"
import { Typography as MUITypography } from "@mui/material"
import ThemeProvider from "../../../ThemeProvider"

const Typography = ({
    align,
    children,
    classes,
    color,
    component,
    gutterBottom,
    nowrap,
    paragraph,
    sx,
    variant,
    variantMapping,
    ...props
}) => {
    return (
        <ThemeProvider>
            <MUITypography
            align={align}
            classes={classes}
            color={color}
            component={component}
            gutterBottom={gutterBottom}
            nowrap={nowrap}
            paragraph={paragraph}
            sx={sx}
            variant={variant}
            variantMapping={variantMapping}
            {...props}
            >{children}</MUITypography>
        </ThemeProvider>
    )
}

Typography.propTypes = {
    align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
    children: PropTypes.node,
    classes: PropTypes.object,
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'error',
        'info',
        'warning',
        'textPrimary',
        'textSecondary',
        'textDisabled',
        PropTypes.string
    ]),
    component: PropTypes.elementType,
    gutterBottom: PropTypes.bool,
    noWrap: PropTypes.bool,
    paragraph: PropTypes.bool,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
        PropTypes.func,
        PropTypes.object,
        PropTypes.bool
    ]),
    variant: PropTypes.oneOfType([
        PropTypes.oneOf([
          "body1",
          "body2",
          "button",
          "caption",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "inherit",
          "overline",
          "subtitle1",
          "subtitle2",
          "buttonLarge",
          "buttonMedium",
          "buttonSmall",
        ]),
        PropTypes.string,
      ]),
    variantMapping: PropTypes.object,
}

export default Typography