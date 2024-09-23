import React from "react";
import Button from "../Button"
export default {
    title: "Components/Input/Button",
    component: Button
}

const Template = (args) => <Button {...args}>Button</Button>

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  size: 'small'
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  color: 'success',
  size: 'large'
};
