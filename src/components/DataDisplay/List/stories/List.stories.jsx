import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Box,
} from "../../List";
import { NMSAvatar } from "../../Avatar";

export default {
  title: "SAMPLE/DataDisplay/List",
  component: List,
};

const Template = ({
  list,
  listItems,
  //   listItemAvatar,
  //   listItemButton,
  //   listItemText,
  //   listSubheader,
  box,
}) => (
  <Box {...box}>
    <List {...list}>
      {listItems.map((item, index) => {
        const { listItemAvatar, listItemButton, listItemText, listItems } =
          item;
        return (
          <ListItem key={index} {...listItems}>
            {listItemAvatar && (
              <ListItemAvatar {...listItemAvatar}></ListItemAvatar>
            )}
            {listItemButton && (
              <ListItemButton {...listItemButton}>
                <ListItemText {...listItemText} />
              </ListItemButton>
            )}
          </ListItem>
        );
      })}
    </List>
  </Box>
);

const BasicList = Template.bind({});
BasicList.args = {
  list: {
    sx: {
      width: "100%",
      maxWidth: "100%",
    },
  },
  listItems: [
    {
      listItemAvatar: {
        primary: "First inbox",
        color: "primary",
        size: 40,
        iconStyle: "BoldDuotone",
        Icolor: "red",
      },
      listItemButton: {
        primary: "First inbox",
        color: "primary",
        secondname: "AltArrowDown",
      },
    },
  ],
};
