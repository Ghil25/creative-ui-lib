import React from "react";
// import NMSAvatar from "../Avatar";
// import NMSAvatarGroup from "../AvatarGroup";
// import NMSStack from "../Stack";
import Badge from "../../Badge/Badge";
import Icon from "../../../Foundation/Icons/Icon";
import { Avatar, AvatarGroup, Stack } from "..";
export default {
  title: "Components/DataDisplay/Avatar",
  component: Avatar,
  argTypes: {
    groupParent: {
      direction: { options: ["row", "column"] },
    },
    avatars: {
      color: { control: "select", options: ["primary", "secondary"] },
    },
  },
};

const Template = ({
  avatars,
  useAvatarGroup,
  groupParent,
  badge,
  usebadge = false,
}) => (
  <>
    {useAvatarGroup ? (
      <AvatarGroup {...groupParent}>
        {avatars.map((avatar, index) => {
          return <Avatar key={index} {...avatar} />;
        })}
      </AvatarGroup>
    ) : (
      <Stack {...groupParent}>
        {avatars.map((avatar, index) => {
          const {
            usebadge,
            color,
            variant,
            overlap,
            anchorOrigin,
            badgeContent,
          } = avatar;
          return usebadge ? (
            <Badge key={index} {...avatar}>
              <Avatar {...avatar} />
            </Badge>
          ) : (
            <Avatar key={index} {...avatar} />
          );
        })}
      </Stack>
    )}
  </>
);

export const ImageAvatars = Template.bind({});
ImageAvatars.args = {
  useAvatarGroup: false,
  groupParent: {
    direction: "row",
    spacing: 2,
  },
  avatars: [
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
  ],
};

export const LetterAvatars = Template.bind({});
LetterAvatars.args = {
  groupParent: {
    direction: "row",
    spacing: 2,
  },
  avatars: [
    {
      sx: { width: "40px", height: "40px", bgcolor: "primary.main" },
      children: "A",
    },
    {
      sx: { width: "40px", height: "40px", bgcolor: "secondary.main" },
      children: "B",
    },
    {
      sx: { width: "40px", height: "40px", bgcolor: "success.main" },
      children: "CD",
    },
    {
      sx: { width: "40px", height: "40px", bgcolor: "warning.main" },
      children: "EF",
    },
  ],
};

export const SizesAvatars = Template.bind({});
SizesAvatars.args = {
  groupParent: {
    direction: "row",
    spacing: 2,
  },
  avatars: [
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "60px", height: "60px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "80px", height: "80px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "100px", height: "100px" },
    },
  ],
};

export const IconAvatars = Template.bind({});
IconAvatars.args = {
  groupParent: {
    direction: "row",
    spacing: 2,
  },
  avatars: [
    {
      sx: { width: "40px", height: "40px", bgcolor: "primary.main" },
      children: (
        <Icon
          name="User"
          size={24}
          iconStyle={"BoldDuotone"}
          color={"inherit"}
        />
      ),
    },
    {
      sx: { width: "40px", height: "40px", bgcolor: "secondary.main" },
      children: (
        <Icon
          name="Stars"
          size={24}
          iconStyle={"BoldDuotone"}
          color={"inherit"}
        />
      ),
    },
    {
      sx: { width: "40px", height: "40px", bgcolor: "success.main" },
      children: (
        <Icon
          name="UserCheck"
          size={24}
          iconStyle={"BoldDuotone"}
          color={"inherit"}
        />
      ),
    },
  ],
};

export const VariantsAvatars = Template.bind({});
VariantsAvatars.args = {
  groupParent: {
    direction: "row",
    spacing: 2,
  },
  avatars: [
    {
      sx: { width: "40px", height: "40px", bgcolor: "primary.main" },
      children: "A",
      variant: "rounded",
    },
    {
      sx: { width: "40px", height: "40px", bgcolor: "secondary.main" },
      children: "B",
      variant: "circle",
    },
    {
      sx: { width: "40px", height: "40px", bgcolor: "success.main" },
      children: "C",
      variant: "square",
    },
  ],
};

export const GroupAvatars = Template.bind({});
GroupAvatars.args = {
  useAvatarGroup: true,
  groupParent: {
    direction: "row",
    spacing: 2,
    max: 2,
  },
  avatars: [
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
  ],
};

export const GroupTotalAvatars = Template.bind({});
GroupTotalAvatars.args = {
  useAvatarGroup: true,
  groupParent: {
    total: 20,
  },
  avatars: [
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
  ],
};

export const BadgeAvatars = Template.bind({});
BadgeAvatars.args = {
  useAvatarGroup: false,
  groupParent: {
    direction: "row",
    spacing: 2,
  },
  avatars: [
    {
      usebadge: true,
      badgeVariant: "dot",
      badgeContent: " ",
      color: "primary",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      overlap: "circular",

      sizes: { width: "40px", height: "40px" },
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      usebadge: true,
      badgeVariant: "dot",
      badgeContent: " ",
      color: "secondary",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      overlap: "circular",

      sizes: { width: "40px", height: "40px" },
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      usebadge: true,
      badgeVariant: "dot",
      badgeContent: " ",
      color: "success",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      overlap: "circular",

      sizes: { width: "40px", height: "40px" },
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      usebadge: true,
      badgeVariant: "dot",
      badgeContent: " ",
      color: "warning",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      overlap: "circular",

      sizes: { width: "40px", height: "40px" },
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
    {
      usebadge: true,
      badgeVariant: "dot",
      badgeContent: " ",
      color: "error",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      overlap: "circular",

      sizes: { width: "40px", height: "40px" },
      alt: "user avatar 1",
      src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
      sx: { width: "40px", height: "40px" },
    },
  ],
};
