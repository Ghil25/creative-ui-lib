import React, { useState } from "react";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import ListItemButton from "../ListItemButton/ListItemButton";
import ListSubheader from "../ListSubheader/ListSubheader";
import ListItemAvatar from "../ListItemAvatar/ListItemAvatar";
import ListItemText from "../ListItemText/ListItemText";
import ListItemIcon from "../ListItemIcon/ListItemIcon";
import Icon from "../../../Foundation/Icons/Icon";
import Divider from "../Divider/Divider";
import Collapse from "../Collapse/Collapse";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";

// import Switch from "../../../Input/Switch/Switch";
import { Avatar } from "../../Avatar";

import ThemeProvider from "../../../../ThemeProvider";
import Typography from "@mui/material/Typography";
export default {
  title: "Components/DataDisplay/List",
  component: List,
};

const Basic = ({
  list,
  listItems,
  listItemAvatar,
  listItemButton,
  listItemText,
  listSubheader,
  icon,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <List {...list}>
      <ListItemButton
        {...listItemButton}
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <Icon {...icon} />
        <ListItemText {...listItemText} />
      </ListItemButton>

      <Divider />
      <ListItem {...listItems}>
        <ListItemButton
          {...listItemButton}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText {...listItemText} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

const Nested = ({
  list,
  listItems,
  listItemButton,
  listItemText,
  collapse,
  cbutton,
  ctext,
  clist,
  icon,
  icon2,
  icon3,
}) => {
  const [Open, setOpen] = useState(true);

  return (
    <List {...list}>
      <ListItemButton onClick={() => setOpen(!Open)} {...listItemButton}>
        <Icon {...icon} />
        <ListItemText {...listItemText} />
        {Open ? <Icon {...icon2} /> : <Icon {...icon3} />}
      </ListItemButton>

      <Collapse in={Open} {...collapse}>
        <List {...clist}>
          <ListItemButton {...cbutton}>
            <ListItemText {...ctext} />
          </ListItemButton>
          <ListItemButton {...cbutton}>
            <ListItemText {...ctext} />
          </ListItemButton>
          <ListItemButton {...cbutton}>
            <ListItemText {...ctext} />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

const Folder = ({
  list,
  listItems,
  listItemButton,
  listItemText,
  listItemAvatar,
  Avatar,
  icon,
  icon2,
  icon3,
}) => {
  return (
    <List {...list}>
      <ListItem {...listItems}>
        <ListItemAvatar {...listItemAvatar}>
          <Icon {...icon} />
        </ListItemAvatar>
        <ListItemText {...listItemText} />
      </ListItem>
    </List>
  );
};

const Controls = ({
  list,
  listItems,
  listItemButton,
  listItemText,
  listItemIcon,
  Avatar,
  icon,
  icon2,
  icon3,
}) => {
  return (
    <ThemeProvider>
      {" "}
      <List {...list}>
        <ListItem {...listItems}>
          <ListItemIcon {...listItemIcon}>
            <Icon {...icon} />
          </ListItemIcon>
          <ListItemText {...listItemText} />
          <Checkbox />
        </ListItem>
        <ListItem {...listItems}>
          <ListItemIcon {...listItemIcon}>
            <Icon {...icon} />
          </ListItemIcon>
          <ListItemText {...listItemText} />
          <Switch />
        </ListItem>
      </List>{" "}
    </ThemeProvider>
  );
};

const AlignListItem = ({
  list,
  listItems,
  listItemAvatar,
  listItemText,
  divider,
  avatar,
}) => {
  return (
    <ThemeProvider>
      <List {...list}>
        <ListItem {...listItems}>
          <ListItemAvatar {...listItemAvatar}>
            <Avatar {...avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={listItemText.primary}
            secondary={listItemText.secondary}
          />
        </ListItem>
        <Divider {...divider} />
        <ListItem {...listItems}>
          <ListItemAvatar {...listItemAvatar}>
            <Avatar {...avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={listItemText.primary}
            secondary={listItemText.secondary}
          />
        </ListItem>
        <Divider {...divider} />
        <ListItem {...listItems}>
          <ListItemAvatar {...listItemAvatar}>
            <Avatar {...avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={listItemText.primary}
            secondary={listItemText.secondary}
          />
        </ListItem>
        <Divider {...divider} />
      </List>
    </ThemeProvider>
  );
};

const InsetListItem = ({
  listItem,
  listButton,
  listIcon,
  icon,
  listText,
  list,
}) => {
  return (
    <List {...list}>
      <ListItem {...listItem}>
        <ListItemButton {...listButton}>
          <ListItemIcon {...listIcon}>
            <Icon {...icon} />
          </ListItemIcon>
          <ListItemText {...listText} />
        </ListItemButton>
      </ListItem>
      {/* <ListItem disablePadding>
    <ListItemButton>
      <ListItemText inset primary="Eric Hoffman" />
    </ListItemButton>
  </ListItem> */}
    </List>
  );
};

const GutterListItem = ({
  listItem,
  listButton,
  listIcon,
  icon,
  listText,
  list,
}) => {
  return (
    <List {...list}>
      <ListItem {...listItem}>
        <ListItemText {...listText} />
      </ListItem>
    </List>
  );
};

const StickyListItem = ({ list, listSubheader, listText, listItem }) => {
  return (
    <List {...list}>
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={sectionId}>
          <ul>
            <ListSubheader
              {...listSubheader}
            >{`I'm sticky ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={item} {...listItem}>
                <ListItemText {...listText} primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export const BasicList = Basic.bind({});
BasicList.args = {
  list: {
    width: "30%",
    maxWidth: "100%",
  },
  listItems: {
    disablePadding: true,
  },
  listItemButton: {},
  listItemText: {
    primary: "Primary Inbox",
    sx: {
      padding: 2,
    },
  },
  icon: {
    name: "Letter",
    size: 40,
    iconStyle: "BoldDuotone",
    color: "secondary",
    sx: {
      padding: 2,
    },
  },
};

export const NestedList = Nested.bind({});
NestedList.args = {
  list: {
    width: "30%",
    maxWidth: "100%",
  },
  listItems: {
    disablePadding: true,
  },
  listItemButton: {},
  listItemText: {
    primary: "Primary Inbox",
    sx: {
      padding: 2,
    },
  },
  collapse: {
    timeout: "auto",
    unmountOnExit: true,
  },
  cbutton: {
    sx: {
      padding: 2,
    },
  },
  ctext: {
    primary: "inside the nested box",
  },
  icon: {
    color: "secondary",
    size: 24,
    iconStyle: "BoldDuotone",
    name: "Buildings",
  },
  icon2: {
    color: "secondary",
    size: 24,
    iconStyle: "BoldDuotone",
    name: "AltArrowUp",
  },
  icon3: {
    color: "secondary",
    size: 24,
    iconStyle: "BoldDuotone",
    name: "AltArrowDown",
  },
};

export const FolderList = Folder.bind({});
FolderList.args = {
  list: {
    width: "30%",
    maxWidth: "100%",
    sx: {
      width: "100%",
      // maxWidth: 360,
      bgcolor: "background.paper",
    },
  },
  listItems: {
    disablePadding: true,
  },

  listItemText: {
    primary: "Primary Inbox",
    secondary: "june 25, 2024",
  },
  Avatar: {
    sx: {
      mr: 2,
    },
  },

  icon: {
    name: "Gallery",
    color: "secondary",
    size: 20,
    iconStyle: "BoldDuotone",
  },
};

export const ControlsList = Controls.bind({});
ControlsList.args = {
  list: {
    width: "30%",
    maxWidth: "100%",
    sx: {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper",
    },
    subheader: "Controls",
  },
  listItems: {
    disablePadding: true,
  },
  listItemButton: {},
  listItemText: {
    primary: "Primary Inbox",
  },
  listItemIcon: {
    sx: {
      mr: 2,
    },
  },
  icon: {
    color: "secondary",
    size: 24,
    iconStyle: "BoldDuotone",
    name: "Buildings",
  },
};

export const AlignListItems = AlignListItem.bind({});
AlignListItems.args = {
  listItems: {
    alignItems: "flex-start",
  },
  avatar: {
    alt: "Remy Sharp",
    src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
  },
  listItemText: {
    primary: "Remy Sharp",
    secondary: (
      <>
        <Typography
          component="span"
          variant="body2"
          sx={{ color: "primary", display: "inline" }}
        >
          This is secondary text
        </Typography>
        {" — Wish I could come, but I'm out of town this…"}
      </>
    ),
  },
  divider: {
    variant: "inset",
  },
};

export const InsetListItems = InsetListItem.bind({});
InsetListItems.args = {
  list: {
    sx: {
      width: "100%",
      maxWidth: "360px",
      bgcolor: "white",
    },
  },
  icon: {
    name: "Letter",
    size: 20,
    iconStyle: "BoldDuotone",
    color: "secondary",
  },
  listItem: {
    disablePadding: true,
  },
  listText: {
    primary: "Chelsea Otakan",
  },
};

export const GutterListItems = GutterListItem.bind({});
GutterListItems.args = {
  list: {
    sx: {
      width: "100%",
      maxWidth: "360px",
      bgcolor: "white",
    },
  },
  icon: {
    name: "Letter",
    size: 20,
    iconStyle: "BoldDuotone",
    color: "secondary",
  },
  listItem: {
    disableGutters: true,
    secondaryAction: <Icon name="Letter" size={40} iconStyle={"BoldDuotone"} />,
  },
  listText: {
    primary: "Chelsea Otakan",
  },
};

export const StickyListItems = StickyListItem.bind({});
StickyListItems.args = {
  list: {
    sx: {
      width: "100%",
      maxWidth: "360px",
      bgcolor: "white",
      position: "relative",
      overflow: "auto",
      maxHeight: 300,
      "& ul": { padding: 0 },
    },
    subheader: <li />,
  },
};
