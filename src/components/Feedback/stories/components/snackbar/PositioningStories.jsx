import React, { useState } from "react";
import Stack from "../../../../DataDisplay/Avatar/Stack/Stack";

import Alert from "../../../Alert/Alert/Alert";
import Icon from "../../../../Foundation/Icons/Icon";
import IconButton from "../../../../Input/Button/IconButton/IconButton";
import Button from "../../../../Input/Button/Button";
import Snackbar from "../../../Snackbar/Snackbar";

// import { Alert, Icon, IconButton, Button, Snackbar } from "@mui/material";

const PositioningSnackbar = ({}) => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState((state) => ({ ...state, open: false }));
  };

  return (
    <>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          open: true,
        }}
      >
        <Stack direction="row">
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick({
              vertical: "top",
              horizontal: "center",
            })}
          >
            TOP-CENTER
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick({ vertical: "top", horizontal: "left" })}
          >
            TOP-LEFT
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick({ vertical: "top", horizontal: "right" })}
          >
            TOP-RIGHT
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick({
              vertical: "bottom",
              horizontal: "left",
            })}
          >
            BOTTOM-LEFT
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick({
              vertical: "bottom",
              horizontal: "right",
            })}
          >
            BOTTOM-RIGHT
          </Button>
        </Stack>
        <Stack direction="row">
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick({
              vertical: "bottom",
              horizontal: "center",
            })}
          >
            BOTTOM-CENTER
          </Button>
        </Stack>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
        open={open}
        onClose={handleClose}
      >
        <Alert
          message={"This is info message!"}
          severity="info"
          color="success"
          action={
            <IconButton>
              <Icon name="CloseCircle" size={24} />
            </IconButton>
          }
          children="This is info message!"
        />
      </Snackbar>
    </>
  );
};

export default PositioningSnackbar;
