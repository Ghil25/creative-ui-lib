import React, { useState } from "react";
import Button from "../../../../Input/Button/Button";
import Menu from "../../../Menu/Menu/Menu";
import MenuItem from "../../../Menu/MenuItem/MenuItem";
import Icon from "../../../../Foundation/Icons/Icon";
const BasicMenuDemo = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
      >
        Dashboard
      </Button>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="Text"
        color="primary"
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Icon name="User" size={20} iconStyle={"BoldDuotone"} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <Icon
            name="UsersGroupTwoRounded"
            size={20}
            iconStyle={"BoldDuotone"}
          />
          My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon name="Logout3" size={20} iconStyle={"BoldDuotone"} /> Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default BasicMenuDemo;
