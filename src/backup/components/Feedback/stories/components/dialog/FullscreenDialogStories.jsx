import React, { forwardRef } from "react";
import { Dialog, Slide } from "../../../Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import { List, ListItemText, ListItemButton } from "../../../../DataDisplay";
import List from "../../../../DataDisplay/List/List/List";

import ListItemButton from "../../../../DataDisplay/List/ListItemButton/ListItemButton";
import ListItemText from "../../../../DataDisplay/List/ListItemText/ListItemText";

import { Button } from "../../../../Input";
import Typography from "../../../../Typography/Typography";

import Icon from "../../../../Foundation/Icons/Icon";

const Transition = forwardRef(function Transition({ slide, ...props }, ref) {
  return <Slide {...props} ref={ref} {...slide} direction="left" />;
});

const FullscreenDialog = ({
  button1,
  button2,
  button3,
  dialog,
  appbar,
  icon,
  typography,
  toolbar,
  list,
  listButton1,
  divider,
  listButton2,
  listText1,
  listText2,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button {...button1} onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        {...dialog}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar {...appbar}>
          <Toolbar {...toolbar}>
            <Button {...button2} onClick={handleClose}>
              <Icon {...icon} />
            </Button>
            <Typography {...typography}>Sound</Typography>
            <Button {...button3} onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List {...list}>
          <ListItemButton {...listButton1}>
            <ListItemText {...listText1} />
          </ListItemButton>
          <Divider {...divider} />
          <ListItemButton {...listButton2}>
            <ListItemText {...listText2} />
          </ListItemButton>
        </List>
      </Dialog>
    </>
  );
};

export default FullscreenDialog;
