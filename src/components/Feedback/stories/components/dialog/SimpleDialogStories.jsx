import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../../Dialog";
import { Avatar } from "../../../../DataDisplay";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
} from "../../../../DataDisplay/List";

import { Button } from "../../../../Input";
import Typography from "../../../../Typography/Typography";

import Icon from "../../../../Foundation/Icons/Icon";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog({
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

export default function SimpleDialogDemo({ typography, button, ...props }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

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
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        {...props}
      />
    </div>
  );
}
