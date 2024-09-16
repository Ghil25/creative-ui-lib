import React, { useState } from "react";
import PropTypes from "prop-types";
import ThemeProvider from "../../../ThemeProvider";
import {
  Box,
  List as NMSList,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  Checkbox,
  Switch,
} from "@mui/material";
import * as SolarIconSet from "solar-icon-set";

const List = ({
  sx,
  listItems = [],
  primary,
  secondary,
  disablePadding = false,
  component,
  href,
  secondname,
  selected,
  Icolor,
  size,
  iconStyle,
  color,
  name,
  width,
  maxWidth,
  onClick,
  useNested = false,
  useCheckbox = false,
  useSwitch = false,
  ...props
}) => {
  const [openItems, setOpenItems] = useState({});

  // Toggles the open state for a specific item
  const handleClick = (index) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <ThemeProvider>
      <Box sx={{ width, maxWidth, ...sx }}>
        <NMSList {...props}>
          {listItems.map((listItemProp, index) => {
            const PrimaryIcon =
              listItemProp.name || name
                ? SolarIconSet[name === undefined ? listItemProp.name : name]
                : null;
            const DrawerComponent =
              listItemProp.secondname || secondname
                ? SolarIconSet[
                    secondname === undefined
                      ? listItemProp.secondname
                      : secondname
                  ]
                : null;

            return (
              <React.Fragment key={index}>
                <ListItem
                  disablePadding={listItemProp.disablePadding || disablePadding}
                >
                  <ListItemButton
                    selected={listItemProp.selected || selected}
                    onClick={() => handleClick(index)}
                  >
                    <ListItemIcon>
                      {PrimaryIcon ? (
                        <PrimaryIcon
                          sx={listItemProp.sx || sx}
                          size={listItemProp.size || size}
                          iconStyle={listItemProp.iconStyle || iconStyle}
                          color={listItemProp.Icolor || Icolor}
                        />
                      ) : null}

                      {listItemProp.useCheckbox || useCheckbox ? (
                        <Checkbox />
                      ) : listItemProp.useSwitch || useSwitch ? (
                        <Switch />
                      ) : null}
                    </ListItemIcon>
                    <ListItemText
                      primary={listItemProp.primary || primary}
                      secondary={listItemProp.secondary || secondary}
                    />
                    {DrawerComponent && (
                      <DrawerComponent
                        sx={listItemProp.sx || sx}
                        size={listItemProp.size || size}
                        iconStyle={listItemProp.iconStyle || iconStyle}
                        color={listItemProp.Icolor || Icolor}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
                {listItemProp.useNested || useNested ? (
                  <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
                    <NMSList component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Nested Item" />
                      </ListItemButton>
                    </NMSList>
                  </Collapse>
                ) : null}
              </React.Fragment>
            );
          })}
        </NMSList>
        <Divider />
      </Box>
    </ThemeProvider>
  );
};

List.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
    PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
  ]),
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      iconStyle: PropTypes.oneOf(["Bold", "BoldDuotone", "Outline"]),
      disablePadding: PropTypes.bool,
      name: PropTypes.string,
      secondname: PropTypes.string,
      useNestedL: PropTypes.bool,
      useCheckbox: PropTypes.bool,
      useSwitch: PropTypes.bool,
      color: PropTypes.oneOf([
        "inherit",
        "action",
        "disabled",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ]),
      Icolor: PropTypes.string,
      sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.object,
            PropTypes.bool,
          ])
        ),
        PropTypes.func,
        PropTypes.object,
        PropTypes.bool,
      ]),
      onClick: PropTypes.func,
    })
  ),
};

export default List;
