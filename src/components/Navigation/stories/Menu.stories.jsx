import BasicMenuDemo from "./components/menu/BasicMenuStories";
import SelectedMenuDemo from "./components/menu/SelectedMenuStories";
import AccountMenuDemo from "./components/menu/AccountMenuStories";
import CustomizeMenuDemo from "./components/menu/CustomizationMenuStories";
import React from "react";

export default {
  title: "Components/Navigation/Menu",
  component: BasicMenuDemo,
};

const BasicMenuDemos = (args) => <BasicMenuDemo {...args} />;
const SelectedMenuDemos = (args) => <SelectedMenuDemo {...args} />;
const AccountMenuDemos = (args) => <AccountMenuDemo {...args} />;
const CustomizeMenuDemos = (args) => <CustomizeMenuDemo {...args} />;

export const BasicMenu = BasicMenuDemos.bind({});
BasicMenu.args = {};

export const SelectedMenu = SelectedMenuDemos.bind({});
SelectedMenu.args = {};

export const AccountMenu = AccountMenuDemos.bind({});
AccountMenu.args = {};

export const CustomizeMenu = CustomizeMenuDemos.bind({});
CustomizeMenu.args = {};
