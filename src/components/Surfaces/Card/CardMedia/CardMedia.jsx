import React from "react";
import { CardMedia as MUICardMedia } from "@mui/material";
import PropTypes from "prop-types";

const CardMedia = ({ children, component, image, src, sx, ...props }) => {
  return (
    <MUICardMedia
      component={component}
      image={image}
      src={src}
      sx={sx}
      {...props}
    />
  );
};

CardMedia.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  image: PropTypes.string,
  src: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...MUICardMedia.PropTypes,
};

export default CardMedia;
