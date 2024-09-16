import React from "react";
import AvatarGroup from "@mui/material/AvatarGroup";

function NMSAvatarGroup({ max, total, sx, children }) {
  return (
    <AvatarGroup max={max} total={total} sx={{ ...sx }}>
      {children}
    </AvatarGroup>
  );
}

export default NMSAvatarGroup;
