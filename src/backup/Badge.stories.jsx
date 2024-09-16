import React from "react";
import MUIBadge from "../../Avatar/Badge";
import MUIStack from "../../Avatar/Stack";
import MUIAvatar from "../../Avatar/Avatar";
import Icon from "../../../Foundation/Icons/Icon";

export default {
  title: "SAMPLE/DataDisplay/Badge",
  component: MUIBadge,
};

const Template = ({ badge, stack, avatar, icon }) => (
  <MUIStack {...stack}>
    <MUIBadge {...badge}></MUIBadge>
    <MUIAvatar {...avatar} />
  </MUIStack>
);

export const Badge = Template.bind({});
Badge.args = {
  stack: {
    direction: "row",
    spacing: 2,
  },
  badge: {
    badgeVariant: "dot",
    badgeContent: " ",
    color: "error",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    overlap: "circular",

    sizes: { width: "40px", height: "40px" },
  },
  avatar: {
    alt: "user avatar 1",
    src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
    sx: { width: "40px", height: "40px" },
  },
};
