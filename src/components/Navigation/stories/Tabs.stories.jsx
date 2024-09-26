import React from "react";
import BasicTabsDemo from "./components/tabs/BasicTabStories";
import ColoredTabsDemo from "./components/tabs/ColoredTabStories";
import ScrollableTabsDemo from "./components/tabs/ScrollableTabStories";
import IconTabsDemo from "./components/tabs/IconTabStories";
import IconPositionDemo from "./components/tabs/IconPositionTabStories";

export default {
  title: "Components/Navigation/Tabs",
  component: BasicTabsDemo,
};

const BasicTabsDemos = (args) => <BasicTabsDemo {...args} />;
const ColoredTabsDemos = (args) => <ColoredTabsDemo {...args} />;
const ScrollableTabsDemos = (args) => <ScrollableTabsDemo {...args} />;
const IconTabsDemos = (args) => <IconTabsDemo {...args} />;
const IconPositionDemos = (args) => <IconPositionDemo {...args} />;

export const BasicTabs = BasicTabsDemos.bind({});
BasicTabs.args = {};

export const ColoredTabs = ColoredTabsDemos.bind({});
ColoredTabs.args = {};

export const ScrollableTabs = ScrollableTabsDemos.bind({});
ScrollableTabs.args = {};

export const IconTabs = IconTabsDemos.bind({});
IconTabs.args = {};

export const IconPosition = IconPositionDemos.bind({});
IconPosition.args = {};
