import React from "react";
import AvatarCollection from "../AvatarCollection";
import {
  Pageview as PageviewIcon,
  AccountCircleSharp as AccountCircleSharpIcon,
  Person3Sharp as Person3SharpIcon,
} from "@mui/icons-material";

export default {
  title: "Components/DataDisplay/Avatar",
  component: AvatarCollection,
};

const Template = (args) => <AvatarCollection {...args} />;
const Apot = (aaa) => <AvatarCollection {...aaa} />;

export const ImageAvatars = Apot.bind({});
ImageAvatars.args = {
  direction: "row",
  spacing: 4,
  avatars: [
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "user avatar 2",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sizes: { width: "50px", height: "50px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "user avatar 3",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sizes: { width: "60px", height: "60px" },
      sx: { border: "1px solid white" },
    },
  ],
};

export const LetterAvatars = Template.bind({});
LetterAvatars.args = {
  direction: "row",
  spacing: 4,
  avatars: [
    {
      alt: "user avatar 1",
      children: "DG",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "user avatar 2",
      children: "XX",
      sizes: { width: "50px", height: "50px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "user avatar 3",
      children: "YY",
      sizes: { width: "60px", height: "60px" },
      sx: { border: "1px solid white" },
    },
  ],
};

export const SizesAvatars = Template.bind({});
SizesAvatars.args = {
  direction: "row",
  spacing: 4,
  avatars: [
    {
      alt: "user avatar 1",
      children: "DGG",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "user avatar 2",
      children: "XB",
      sizes: { width: "64px", height: "64px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "user avatar 3",
      children: "YY",
      sizes: { width: "96px", height: "96px" },
      sx: { border: "1px solid white" },
    },
  ],
};

export const IconAvatars = Template.bind({});
IconAvatars.args = {
  direction: "row",
  spacing: 4,
  avatars: [
    {
      alt: "icon avatar 1",
      children: <PageviewIcon />,
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "icon avatar 2",
      children: <Person3SharpIcon />,
      sizes: { width: "50px", height: "50px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "icon avatar 3",
      children: <AccountCircleSharpIcon />,
      sizes: { width: "60px", height: "60px" },
      sx: { border: "1px solid white" },
    },
  ],
};

export const VariantAvatars = Template.bind({});
VariantAvatars.args = {
  direction: "row",
  spacing: 4,
  avatars: [
    {
      alt: "rounded avatar 1",
      children: "A",
      variant: "rounded",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "rounded avatar 2",
      children: "B",
      variant: "circle",
      sizes: { width: "50px", height: "50px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "rounded avatar 3",
      children: "C",
      variant: "rounded",
      sizes: { width: "60px", height: "60px" },
      sx: { border: "1px solid white" },
    },
  ],
};

export const GroupAvatarsMax = Template.bind({});
GroupAvatarsMax.args = {
  direction: "row",
  useAvatarGroup: true,
  max: 2,
  avatars: [
    {
      alt: "rounded avatar 1",
      children: "A",
      variant: "circle",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "circle avatar 2",
      children: "B",
      variant: "circle",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "circle avatar 3",
      children: "C",
      variant: "circle",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "circle avatar 2",
      children: "B",
      variant: "circle",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "circle avatar 2",
      children: "B",
      variant: "circle",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
  ],
};

export const GroupAvatarsTotal = Template.bind({});
GroupAvatarsTotal.args = {
  direction: "row",
  useAvatarGroup: true,
  total: 20,
  avatars: [
    {
      alt: "rounded avatar 1",
      children: "A",
      variant: "circle",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "circle avatar 2",
      children: "B",
      variant: "circle",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "circle avatar 3",
      children: "C",
      variant: "circle",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "circle avatar 2",
      children: "B",
      variant: "circle",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "circle avatar 2",
      children: "B",
      variant: "circle",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
  ],
};

export const BadgeAvatar = Template.bind({});
BadgeAvatar.args = {
  direction: "row",
  useBadge: true,
  avatars: [
    {
      alt: "rounded avatar 1",
      children: "A",
      badgeVariant: "dot",
      color: "secondary",
      useBadge: true,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      overlap: "circular",
      badgeContent: " ",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "rounded avatar 1",
      children: "A",
      badgeVariant: "dot",
      color: "primary",
      useBadge: true,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      overlap: "circular",
      badgeContent: " ",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
    {
      alt: "rounded avatar 1",
      children: "A",
      badgeVariant: "dot",
      color: "error",
      useBadge: true,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      overlap: "circular",
      badgeContent: " ",
      sizes: { width: "40px", height: "40px" },
      sx: { border: "1px solid white" },
    },
  ],
};
