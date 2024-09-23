import { Avatar as MUIAvatar } from "@mui/material";
import React from "react";
// import PropTypes from "prop-types";
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

export default Avatar;

// MUIAvatar.propTypes = {
//   alt: PropTypes.string,
//   src: PropTypes.string,
//   sx: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
//     ),
//     PropTypes.func,
//     PropTypes.object,
//     PropTypes.bool,
//   ]),
//   children: PropTypes.node,
//   variant: PropTypes.string,
// };
