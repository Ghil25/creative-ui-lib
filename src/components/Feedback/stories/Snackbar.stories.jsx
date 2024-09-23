import React from "react";
import OpenSnackbar from "./components/snackbar/OpenSnackbarStories";
import BasicSnackbar from "./components/snackbar/BasicSnackbarStories";
import CustomSnackbar from "./components/snackbar/CustomizeSnackbarStories";
import PositioningSnackbar from "./components/snackbar/PositioningStories";

export default {
  title: "Components/Feedback/Snackbar",
  component: OpenSnackbar,
};

const OpenSnackbarDemo = (args) => <OpenSnackbar {...args} />;
const BasicSnackbarDemo = (args) => <BasicSnackbar {...args} />;
const CustomSnackbarDemo = (args) => <CustomSnackbar {...args} />;
const PositioningSnackbarDemo = (args) => <PositioningSnackbar {...args} />;

export const OpenSnackbars = OpenSnackbarDemo.bind({});
OpenSnackbars.args = {
  iconbutton: {
    color: "secondary",
    sx: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "red",
      },
    },
  },
  icon: {
    name: "Letter",
    color: "primary",
  },
};

export const BasicSnackbars = BasicSnackbarDemo.bind({});
BasicSnackbars.args = {
  stack: {
    sx: {
      width: "35%",
    },
    spacing: 2,
  },
  alerts: [
    {
      severity: "success",
      variant: "filled",
      children: "This is a success Alert.",
      color: "success",
      ico: {
        name: "CloseCircle",
        iconStyle: "Outline",
        size: 24,
        color: "success",
      },
    },
    {
      severity: "info",
      variant: "filled",
      children: "This is a info Alert.",
      ico: {
        name: "CloseCircle",
        iconStyle: "Outline",
        size: 24,
        color: "info",
      },
    },
    {
      severity: "warning",
      variant: "filled",
      children: "This is a warning Alert.",
      ico: {
        name: "CloseCircle",
        iconStyle: "Outline",
        size: 24,
        color: "warning",
      },
    },
    {
      severity: "error",
      variant: "filled",
      children: "This is a error Alert.",
      ico: {
        name: "CloseCircle",
        iconStyle: "Outline",
        size: 24,
        color: "error",
      },
    },
  ],
};

export const OutlinedSnackbars = BasicSnackbarDemo.bind({});
OutlinedSnackbars.args = {
  stack: {
    sx: {
      width: "50%",
    },
    spacing: 2,
  },
  alerts: [
    {
      severity: "success",
      variant: "outlined",
      children: "This is a success Alert.",
      color: "success",
      ico: {
        name: "CloseCircle",
        iconStyle: "Outline",
        size: 24,
        color: "success",
      },
    },
    {
      severity: "info",
      variant: "outlined",
      children: "This is a info Alert.",
      ico: {
        name: "CloseCircle",
        iconStyle: "Outline",
        size: 24,
        color: "info",
      },
    },
    {
      severity: "warning",
      variant: "outlined",
      children: "This is a warning Alert.",
      ico: {
        name: "CloseCircle",
        iconStyle: "Outline",
        size: 24,
        color: "warning",
      },
    },
    {
      severity: "error",
      variant: "outlined",
      children: "This is a error Alert.",
      ico: {
        name: "CloseCircle",
        iconStyle: "Outline",
        size: 24,
        color: "error",
      },
    },
  ],
};

export const CustomizedSnackbars = CustomSnackbarDemo.bind({});
CustomizedSnackbars.args = {
  stack: {
    sx: {
      width: "50%",
    },
    spacing: 2,
  },
  alerts: [
    {
      children: "This is a info Message.",
      severity: "info",
      stack: {
        direction: "row",
        spacing: 2,
      },
      button1: {
        children: "Undo",
        variant: "text",
        color: "info",
      },
      button2: {
        children: "Dismiss",
        variant: "text",
        color: "info",
      },
      ico: {
        name: "InfoSquare",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "info",
      },
    },
    {
      children: "This is a warning Message.",
      severity: "warning",
      stack: {
        direction: "row",
        spacing: 2,
      },
      button1: {
        children: "Undo",
        variant: "text",
        color: "warning",
      },
      button2: {
        children: "Dismiss",
        variant: "text",
        color: "warning",
      },
      ico: {
        name: "DangerTriangle",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "warning",
      },
    },
    {
      children: "This is a error Message.",
      severity: "error",
      stack: {
        direction: "row",
        spacing: 2,
      },
      button1: {
        children: "Undo",
        variant: "text",
        color: "error",
      },
      button2: {
        children: "Dismiss",
        variant: "text",
        color: "error",
      },
      ico: {
        name: "DangerTriangle",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "error",
      },
    },
    {
      children: "This is a success Alert.",
      severity: "success",
      stack: {
        direction: "row",
        spacing: 2,
      },
      button1: {
        children: "Undo",
        variant: "text",
        color: "success",
      },
      button2: {
        children: "Dismiss",
        variant: "text",
        color: "success",
      },
      ico: {
        name: "CheckCircle",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "success",
      },
    },
  ],
};

export const PositioningSnackbars = PositioningSnackbarDemo.bind({});
PositioningSnackbars.args = {};
