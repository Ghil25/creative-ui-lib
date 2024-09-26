import React, { useState } from "react";

import Tabs from "../../../Tabs/Tabs/Tabs";
import Tab from "../../../Tabs/Tab/Tab";
import Box from "../../../../Foundation/Layout/Box/Box";
import Icon from "../../../../Foundation/Icons/Icon";

const IconPositionDemo = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab
          icon={<Icon name="Phone" iconStyle={"BoldDuotone"} size={"24px"} />}
          iconPosition="top"
          aria-label="contacts"
          label="contacts"
        />
        <Tab
          icon={<Icon name="Heart" iconStyle={"BoldDuotone"} size={"24px"} />}
          aria-label="favorite"
          label="favorite"
          iconPosition="start"
        />
        <Tab
          icon={
            <Icon
              name="ArchiveUpMinimlistic"
              iconStyle={"BoldDuotone"}
              size={"24px"}
            />
          }
          aria-label="archieve"
          label="archieve"
          iconPosition="end"
        />
        <Tab
          icon={
            <Icon name="Settings" iconStyle={"BoldDuotone"} size={"24px"} />
          }
          aria-label="settings"
          label="settings"
          iconPosition="bottom"
        />
      </Tabs>
    </Box>
  );
};

export default IconPositionDemo;
