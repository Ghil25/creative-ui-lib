import React from "react";
import OpenSnackbar from "./components/snackbar/OpenSnackbarStories";

export default {
  title: "Components/Feedback/Snackbar",
  component: OpenSnackbar,
};

const OpenSnackbarDemo = (args) => <OpenSnackbar {...args} />;

export const OpenSnackbars = OpenSnackbarDemo.bind({});
OpenSnackbars.args = {
  iconbutton: {
    color: "secondary",
  },
};
