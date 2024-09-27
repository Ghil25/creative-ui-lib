import React from "react";

import { StyledBadge, Badge } from "../../Badge";
import { Avatar } from "../../Avatar";
import Stack from "../../../Foundation/Layout/Stack/Stack";
import Icon from "../../../Foundation/Icons/Icon";

export default {
  title: "Components/DataDisplay/Badge",
  component: Badge,
};

const Template = ({ badges, stack, icon }) => (
  <Stack {...stack}>
    {badges.map((badge, index) => {
      const { icon, ...badges } = badge;
      return (
        <Badge key={index} {...badges}>
          <Icon {...icon} />
        </Badge>
      );
    })}
  </Stack>
);

const Statusbadge = ({ badges, stack, icon }) => (
  <Stack {...stack}>
    {badges.map((badge, index) => {
      const { avatar, ...badges } = badge;
      return (
        <StyledBadge key={index} {...badges}>
          <Avatar {...avatar} />
        </StyledBadge>
      );
    })}
  </Stack>
);

export const BasicBadge = Template.bind({});
BasicBadge.args = {
  stack: {
    direction: "row",
    spacing: 2,
  },
  badges: [
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "error",
      },
    },
  ],
};

export const MaximumValueBadge = Template.bind({});
MaximumValueBadge.args = {
  stack: {
    direction: "row",
    spacing: 2,
  },
  badges: [
    {
      badgeContent: 9,
      color: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "error",
      },
    },
    {
      badgeContent: 100,
      max: 99,
      color: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "error",
      },
    },
    {
      badgeContent: 1000,
      max: 999,
      color: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "error",
      },
    },
  ],
};

export const OverlapBadge = Template.bind({});
OverlapBadge.args = {
  stack: {
    direction: "row",
    spacing: 2,
  },
  badges: [
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "primary",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "primary",
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "secondary",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "secondary",
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "success",
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "info",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "info",
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "warning",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "warning",
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "error",
      },
    },
  ],
};

export const ColorBadge = Template.bind({});
ColorBadge.args = {
  stack: {
    direction: "row",
    spacing: 2,
  },
  badges: [
    {
      badgeContent: 1,
      color: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "primary",
      },
    },
    {
      badgeContent: 1,
      color: "secondary",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "secondary",
      },
    },
    {
      badgeContent: 1,
      color: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "success",
      },
    },
    {
      badgeContent: 1,
      color: "info",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "info",
      },
    },
    {
      badgeContent: 1,
      color: "warning",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "warning",
      },
    },
    {
      badgeContent: 1,
      color: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "error",
      },
    },
  ],
};

export const DotBadge = Template.bind({});
DotBadge.args = {
  stack: {
    direction: "row",
    spacing: 2,
  },
  badges: [
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "primary",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },

      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "primary",
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "secondary",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "secondary",
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "success",
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "info",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "info",
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "warning",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "warning",
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      sizes: { width: "40px", height: "40px" },
      icon: {
        name: "Letter",
        size: 24,
        iconStyle: "BoldDuotone",
        color: "error",
      },
    },
  ],
};

export const StatusBadge = Statusbadge.bind({});
StatusBadge.args = {
  stack: {
    direction: "row",
    spacing: 2,
  },
  badges: [
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      avatar: {
        alt: "user avatar 1",
        src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
        sx: { width: "40px", height: "40px" },
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      avatar: {
        alt: "user avatar 1",
        src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
        sx: { width: "40px", height: "40px" },
      },
    },
    {
      badgeVariant: "dot",
      badgeContent: " ",
      color: "warning",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      overlap: "circular",
      avatar: {
        alt: "user avatar 1",
        src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
        sx: { width: "40px", height: "40px" },
      },
    },
  ],
};
