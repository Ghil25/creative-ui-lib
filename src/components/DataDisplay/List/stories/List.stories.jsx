import React from "react";
import List from "../List";
import { useArgs } from "storybook/internal/preview-api";

export default {
  title: "Components/DataDisplay/List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const BasicList = Template.bind({});
BasicList.args = {
  sx: {
    width: "100%",
    maxWidth: "100%",
  },
  listItems: [
    {
      name: "Buildings",
      secondname: "AltArrowDown",
      primary: "First inbox",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
    },
    {
      name: "Buildings",
      secondname: "AltArrowDown",
      primary: "First inbox",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
    },
    {
      name: "Buildings",
      secondname: "AltArrowDown",
      primary: "First inbox",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
    },
    {
      primary: "First inbox",
      color: "primary",
      secondname: "AltArrowDown",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
    },
    {
      primary: "First inbox",
      color: "primary",
      secondname: "AltArrowDown",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
    },
  ],
};

export const NestedList = Template.bind({});
NestedList.args = {
  sx: {
    width: "100%",
    maxWidth: "100%",
  },
  listItems: [
    {
      name: "Buildings",
      secondname: "AltArrowDown",
      primary: "First inbox",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useNested: true,
    },
    {
      name: "Buildings",
      secondname: "AltArrowDown",
      primary: "First inbox",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useNested: true,
    },
    {
      name: "Buildings",
      secondname: "AltArrowDown",
      primary: "First inbox",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useNested: true,
    },
    {
      primary: "First inbox",
      color: "primary",
      secondname: "AltArrowDown",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useNested: true,
    },
    {
      primary: "First inbox",
      color: "primary",
      secondname: "AltArrowDown",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useNested: true,
    },
  ],
};

export const FolderList = Template.bind({});
FolderList.args = {
  sx: {
    width: "50%",
    maxWidth: "100%",
  },
  listItems: [
    {
      name: "Gallery",
      primary: "Galery",
      secondary: "December 25, 2024",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
    },
    {
      name: "ClapperboardPlay",
      primary: "First inbox",
      secondary: "December 25, 2024",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
    },
    {
      name: "MusicNotes",
      primary: "First inbox",
      secondary: "December 25, 2024",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
    },
  ],
};

export const ListControlList = Template.bind({});
ListControlList.args = {
  sx: {
    width: "50%",
    maxWidth: "100%",
  },
  listItems: [
    {
      primary: "First Inbox",
      secondary: "December 25, 2024",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useCheckbox: true,
    },
    {
      primary: "Second Inbox",
      secondary: "December 25, 2024",
      color: "secondary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useCheckbox: true,
    },
    {
      primary: "Third Inbox",
      secondary: "December 25, 2024",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useCheckbox: true,
    },
    {
      primary: "Third Inbox",
      secondary: "December 25, 2024",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useSwitch: true,
    },
    {
      primary: "Third Inbox",
      secondary: "December 25, 2024",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useSwitch: true,
    },
    {
      primary: "Third Inbox",
      secondary: "December 25, 2024",
      color: "primary",
      size: 40,
      iconStyle: "BoldDuotone",
      Icolor: "red",
      useSwitch: true,
    },
  ],
};
