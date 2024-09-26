import { Avatar as MUIAvatar } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function Avatar({
  alt,
  src,
  sx,
  variant,
  children,
  classes,
  component,
  imgProps,
  sizes,
  slotProps,
  slots,
  srcSet,
  ...props
}) {
  return (
    <MUIAvatar
      alt={alt}
      src={src}
      sx={sx}
      variant={variant}
      component={component}
      imgProps={imgProps}
      sizes={sizes}
      slotProps={slotProps}
      slots={slots}
      srcSet={srcSet}
      classes={classes}
      {...props}
    >
      {children}
    </MUIAvatar>
  );
}

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  variant: PropTypes.oneOf(["circular", "rounded", "square"]),
  children: PropTypes.node,
  classes: PropTypes.object,
  component: PropTypes.elementType,
  imgProps: PropTypes.object,
  sizes: PropTypes.string,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  srcSet: PropTypes.string,
};

export default Avatar;
