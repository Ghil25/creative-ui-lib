import React from "react";
import { AvatarGroup as MUIAvatarGroup } from "@mui/material";

function AvatarGroup({ max, total, sx, children }) {
  return (
    <MUIAvatarGroup max={max} total={total} sx={{ ...sx }}>
      {children}
    </MUIAvatarGroup>
  );
}

export default AvatarGroup;
