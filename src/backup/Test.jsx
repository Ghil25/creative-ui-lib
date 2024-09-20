import React from "react";
import Icon from "../../../../Foundation/Icons/Icon";
import Button from "../../../../Input/Button";
import Snackbar from "../../../Snackbar/Snackbar";
import IconButton from "../../../../Input/Button/IconButton/IconButton";
const OpenSnackbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton aria-label="close" color="primary" onClick={handleClose}>
        <Icon name="CloseCircle" iconStyle={"BoldDuotone"} size={24} />
      </IconButton>
    </>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </div>
  );
};

export default OpenSnackbar;
