import React from "react";
import { ListItemText as NMSListItemText } from "@mui/material";
import PropTypes from "prop-types";

const ListItemText = ({
  disableTypography,
  inset,
  primary,
  primaryTypographyProps,
  secondary,
  secondaryTypographyProps,
  sx,
  ...props
}) => {
  return (
    <NMSListItemText
      disableTypography={disableTypography}
      inset={inset}
      primary={primary}
      primaryTypographyProps={primaryTypographyProps}
      secondary={secondary}
      secondaryTypographyProps={secondaryTypographyProps}
      sx={sx}
      {...props}
    />
  );
};

ListItemText.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.node,
  primaryTypographyProps: PropTypes.object,
  secondary: PropTypes.node,
  secondaryTypographyProps: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...NMSListItemText.PropTypes,
};

// ListItemText.defaultProps = {
//   primary: "primary",
// };

export default ListItemText;
