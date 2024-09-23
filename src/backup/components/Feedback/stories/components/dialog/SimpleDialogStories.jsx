import React, { useState } from "react";
// import { Dialog, DialogTitle } from "../../../Dialog";
import { Avatar } from "../../../../DataDisplay/Avatar";
// import {
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   ListItemButton,
// } from "../../../../DataDisplay/List";

import { Button } from "../../../../Input";
import Typography from "../../../../Typography/Typography";

// import Button from "../../../../Input/Button/Button";
// import Typography from "../../../../Typography/Typography";
import Icon from "../../../../Foundation/Icons/Icon";
import Dialog from "../../../Dialog/Dialog/Dialog";
import DialogTitle from "../../../Dialog/DialogTitle/DialogTitle";
// import Avatar from "../../../../DataDisplay/Avatar/Avatar/Avatar";
import List from "../../../../DataDisplay/List/List/List";
import ListItem from "../../../../DataDisplay/List/ListItem/ListItem";
import ListItemButton from "../../../../DataDisplay/List/ListItemButton/ListItemButton";
import ListItemText from "../../../../DataDisplay/List/ListItemText/ListItemText";
import ListItemAvatar from "../../../../DataDisplay/List/ListItemAvatar/ListItemAvatar";
const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialogContent({
  dialog,
  dialogtitle,
  list,
  listItem,
  listButton,
  listAvatar,
  avatar,
  listText,
  typography,
  button,
  list2,
  listItem2,
  listButton2,
  listAvatar2,
  avatar2,
  listText2,
  ...props
}) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} {...dialog}>
      <DialogTitle {...dialogtitle}>Set backup account</DialogTitle>
      <List {...list}>
        {emails.map((email, index) => (
          <ListItem {...listItem} key={index}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar {...listAvatar}>
                <Avatar {...avatar}>
                  <Icon name="Letter" size={40} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText {...listText} primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem {...listItem2}>
          <ListItemButton
            {...listButton2}
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar {...listAvatar2}>
              <Avatar {...avatar2}>
                <Icon name="Letter" size={40} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText {...listText2} />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

function SimpleDialog({ typography, button, ...props }) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography {...typography}>Selected: {selectedValue}</Typography>
      <br />
      <Button {...button} onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialogContent
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        {...props}
      />
    </div>
  );
}

export default SimpleDialog;
