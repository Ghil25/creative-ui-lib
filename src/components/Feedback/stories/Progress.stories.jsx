import React from "react";
import CircularProgressDemo from "./components/progress/CircularStories";
import LinearProgressDemo from "./components/progress/LinearStories";
import LinearWithValueLabel from "./components/progress/LinearLabelStories";


export default {
  title: "Components/Feedback/Progress",
  component: CircularProgressDemo,
};

const CircularProgressDemos = (args) => {
  return <CircularProgressDemo {...args} />;
};
const LinearProgressDemos = (args) => {
  return <LinearProgressDemo {...args} />;
};

const LinearWithValueLabelDemos = (args) => {
  return <LinearWithValueLabel {...args} />;
};

export const Circular = CircularProgressDemos.bind({});
Circular.args = {
  stack: {
    spacing: 2,
    direction: "row",
    sx: {
      color: "grey.500",
    },
  },
  circularProgress: [
    {
      color: "primary",
      size: 40,
    },
    {
      color: "secondary",
    },
    {
      color: "error",
    },
    {
      color: "info",
    },
    {
      color: "success",
    },
    {
      color: "warning",
    },
  ],
};

export const Linear = LinearProgressDemos.bind({});
Linear.args = {
  stack: {
    spacing: 2,

    sx: {
      color: "grey.500",
    },
  },
  linearProgress: [
    {
      color: "primary",
    },
    {
      color: "secondary",
    },
    {
      color: "error",
    },
    {
      color: "info",
    },
    {
      color: "success",
    },
    {
      color: "warning",
    },
  ],
};

export const LinearWithLabel = LinearWithValueLabelDemos.bind({});
LinearWithLabel.args = {
  box1: { sx: { width: "80%", p: 2, bgcolor: "background.paper" } },
  box2: { sx: { width: "100%", p: 1 } },
  box3: { sx: { width: "100%", p: 1 } },
  linearProgress: { variant: "determinate" },
  typography: { variant: "h6", color: "primary.main" },
};
