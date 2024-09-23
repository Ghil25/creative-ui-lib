import React from "react";
import Icon from "../../../../Foundation/Icons/Icon";
import Button from "../../../../Input/Button";
import Snackbar from "../../../Snackbar/Snackbar";
import IconButton from "../../../../Input/Button/IconButton/IconButton";
const OpenSnackbar = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = ({ button1, button2, iconbutton }) => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton aria-label="close" onClick={handleClose}>
        <Icon name="CloseCircle" iconStyle={"BoldDuotone"} size={24} />
      </IconButton>
    </>
  );

  const { button1, iconButton } = props;

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={Action}
      />
    </div>
  );
};

export default OpenSnackbar;
