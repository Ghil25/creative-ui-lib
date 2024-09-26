import React, { useState } from "react";

import Tabs from "../../../Tabs/Tabs/Tabs";
import Tab from "../../../Tabs/Tab/Tab";
import Box from "../../../../Foundation/Layout/Box/Box";
import Icon from "../../../../Foundation/Icons/Icon";

const IconTabsDemo = () => {
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
        <Tab aria-label="contacts" label="contacts" />
        <Tab aria-label="favorite" label="favorite" />
        <Tab aria-label="archieve" label="archieve" />
        <Tab aria-label="settings" label="settings" />
      </Tabs>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab
          icon={<Icon name="Phone" iconStyle={"BoldDuotone"} size={24} />}
          aria-label="contacts"
          label="contacts"
        />
        <Tab
          icon={<Icon name="Heart" iconStyle={"BoldDuotone"} size={24} />}
          aria-label="favorite"
          label="favorite"
        />
        <Tab
          icon={
            <Icon
              name="ArchiveUpMinimlistic"
              iconStyle={"BoldDuotone"}
              size={24}
            />
          }
          aria-label="archieve"
          label="archieve"
        />
        <Tab
          icon={<Icon name="Settings" iconStyle={"BoldDuotone"} size={24} />}
          aria-label="settings"
          label="settings"
        />
      </Tabs>
    </Box>
  );
};

export default IconTabsDemo;
