import React from "react";

import {
  AlertStories,
  SimpleDialog,
  FormDialog,
  TransitionDialog,
  FullscreenDialog,
} from "./components";

export default {
  title: "Components/Feedback/Dialog",
  component: AlertStories,
};

const SimpleDialogDemo = (args) => <SimpleDialog {...args} />;
const AlertDemo = (args) => <AlertStories {...args} />;
const FormDialogDemo = (args) => <FormDialog {...args} />;
const TransitionDemo = (args) => <TransitionDialog {...args} />;
const FullscreenDemo = (args) => <FullscreenDialog {...args} />;

export const AlertDialog = AlertDemo.bind({});
AlertDialog.args = {
  button1: {
    variant: "outlined",
    label: "Open alert dialog",
  },
  dialog: {
    ariaLabelledby: "alert-dialog-title",
    ariaDescribedby: "alert-dialog-description",
  },
  dialogTitle: {
    id: "alert-dialog-title",
    label: "Use Google's location service?",
  },
  dialogContentText: {
    id: "alert-dialog-description",
  },
  button2: {
    variant: "outlined",
  },
  button3: {
    variant: "contained",
  },
};

export const SimpleDialogs = SimpleDialogDemo.bind({});
SimpleDialogs.args = {
  dialog: {},
  dialogTitle: {},
  list: {
    sx: {
      padding: 0,
    },
  },
  listText2: {
    primary: "Add account",
  },
};

export const FormDialogs = FormDialogDemo.bind({});
FormDialogs.args = {
  button1: {
    variant: "outlined",
  },
  dialog: {
    PaperProps: {
      component: "form",
      onSubmit: (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const email = formJson.email;
        console.log(email);
        handleClose();
      },
    },
  },
  textField: {
    autoFocus: true,
    required: true,
    margin: "dense",
    id: "name",
    name: "email",
    label: "Email Address",
    type: "email",
    fullWidth: true,
    variant: "standard",
  },
  button3: {
    type: "submit",
  },
};

export const TransitionDialogs = TransitionDemo.bind({});
TransitionDialogs.args = {
  slide: {
    direction: "up",
  },
  button1: {
    variant: "outlined",
  },
  dialog: {
    keepMounted: true,
    ariaDescribedby: "alert-dialog-slide-description",
  },
  dialogText: {
    id: "alert-dialog-slide-description",
  },
};

export const FullscreenDialogs = FullscreenDemo.bind({});
FullscreenDialogs.args = {
  button1: {
    variant: "outlined",
  },
  dialog: {
    fullScreen: true,
  },
  appbar: {
    sx: {
      position: "relative",
    },
  },
  button2: {
    edge: "center",
    color: "primary",
    ariaLabel: "close",
  },
  icon: {
    name: "CloseCircle",
    size: 40,
  },
  typography: {
    sx: {
      ml: 2,
      flex: 1,
    },
    variant: "h6",
    component: "div",
  },
  button3: {
    autoFocus: true,
    color: "primary",
  },
  listText1: {
    primary: "Phone ringtone",
    secondary: "Titania",
  },
  listText2: {
    primary: "Default notification ringtone",
    secondary: "Tethys",
  },
};
