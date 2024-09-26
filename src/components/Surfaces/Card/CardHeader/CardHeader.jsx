import React from "react";
import { CardHeader as MUICardHeader } from "@mui/material";
import PropTypes from "prop-types";

const CardHeader = ({
  action,
  avatar,
  component,
  subheader,
  subheaderTypographyProps,
  sx,
  title,
  titleTypographyProps,
  ...props
}) => {
  return (
    <MUICardHeader
      action={action}
      avatar={avatar}
      component={component}
      subheader={subheader}
      subheaderTypographyProps={subheaderTypographyProps}
      sx={sx}
      title={title}
      titleTypographyProps={titleTypographyProps}
      {...props}
    />
  );
};

CardHeader.propTypes = {
  action: PropTypes.node,
  avatar: PropTypes.node,
  component: PropTypes.elementType,
  subheader: PropTypes.node,
  subheaderTypographyProps: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  title: PropTypes.node,
  titleTypographyProps: PropTypes.object,
  ...MUICardHeader.PropTypes,
};

export default CardHeader;
