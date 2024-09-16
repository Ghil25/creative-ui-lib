import { Avatar as MUIAvatar } from "@mui/material";
import React from "react";
// import PropTypes from "prop-types";
function NMSAvatar({ alt, src, sx, variant, children, ...props }) {
  return (
    <MUIAvatar alt={alt} src={src} sx={sx} variant={variant} {...props}>
      {children}
    </MUIAvatar>
  );
}

export default NMSAvatar;

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
