import React from "react";
import PropTypes from "prop-types";
import { Box, List as NMSList, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, ListItemAvatar } from "@mui/material";
import * as SolarIconSet from "solar-icon-set";


const List = ({
  sx, listItems = [], primary, disablepadding = false, selected, size, iconStyle, color, ...props
}) => {

  return (
    <Box sx={sx}>
      <NMSList {...props}>
        {
          listItems.map((listItemProp, index) => {
            const PrimaryIcon = SolarIconSet[listItemProp.primaryIcon];
            const SecondaryIcon = SolarIconSet[listItemProp.secondaryIcon];

            if (!PrimaryIcon || !SecondaryIcon) {
              console.error(`One or both icons not found in SolarIconSet for list item ${index}.`);
              return null;
            }

            return (
              <ListItem key={index} disablepadding={listItemProp.disablepadding || disablepadding}>
                <ListItemButton selected={listItemProp.selected || selected}>
                  <ListItemIcon>
                    <PrimaryIcon
                      sx={{
                        color: listItemProp.primaryIconColor || color || 'primary',
                        fontSize: listItemProp.primaryIconSize || size,
                        ...listItemProp.sx
                      }}
                      iconStyle={listItemProp.iconStyle || iconStyle}
                    />
                    <ListItemAvatar />
                  </ListItemIcon>
                  <ListItemText primary={listItemProp.primary || primary} />
                  <ListItemIcon>
                    <SecondaryIcon
                      sx={{
                        color: listItemProp.secondaryIconColor || color || 'secondary',
                        fontSize: listItemProp.secondaryIconSize || size,
                        ...listItemProp.sx
                      }}
                      iconStyle={listItemProp.iconStyle || iconStyle}
                    />
                  </ListItemIcon>
                  <ExpandMore />
                </ListItemButton>
              </ListItem>
            );
          })
        }
      </NMSList>
      <Divider />
    </Box>
  );
};

export default List;

List.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconStyle: PropTypes.oneOf(["Bold", "BoldDuotone", "Outline"]),
  color: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  listItems: PropTypes.arrayOf(PropTypes.shape({
    primaryIcon: PropTypes.string.isRequired,  // Primary icon name
    secondaryIcon: PropTypes.string,  // Secondary icon name
    disablepadding: PropTypes.bool,
    primary: PropTypes.string,
    selected: PropTypes.bool,
    primaryIconColor: PropTypes.string,
    secondaryIconColor: PropTypes.string,
    primaryIconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    secondaryIconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconStyle: PropTypes.string,
    sx: PropTypes.object,
  })),
};
