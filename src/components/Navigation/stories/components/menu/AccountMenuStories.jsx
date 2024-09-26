import React, { useState } from "react";

import Box from "../../../../DataDisplay/List/Box/Box";
import Avatar from "../../../../DataDisplay/Avatar/Avatar/Avatar";
import Menu from "../../../Menu/Menu/Menu";
import MenuItem from "../../../Menu/MenuItem/MenuItem";
import Icon from "../../../../Foundation/Icons/Icon";
import ListItemIcon from "../../../../DataDisplay/List/ListItemIcon/ListItemIcon";
import Divider from "../../../../DataDisplay/List/Divider/Divider";
import IconButton from "../../../../Input/Button/IconButton/IconButton";
import Typography from "../../../../Typography/Typography";
import { Tooltip } from "@mui/material";

const AccountMenuDemo = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Icon name="User" size={24} iconStyle={"BoldDuotone"} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon
            name="UsersGroupTwoRounded"
            size={24}
            iconStyle={"BoldDuotone"}
          />{" "}
          My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Icon name="UserPlusRounded" size={24} iconStyle={"BoldDuotone"} />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Icon name="Settings" size={24} iconStyle={"BoldDuotone"} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Icon name="Logout3" size={24} iconStyle={"BoldDuotone"} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenuDemo;
