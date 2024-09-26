import React, { useState } from "react";

import Tabs from "../../../Tabs/Tabs/Tabs";
import Tab from "../../../Tabs/Tab/Tab";
import Box from "../../../../Foundation/Layout/Box/Box";

const ColorTabsDemo = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
        <Tab value="four" label="Item Four" />
        <Tab value="five" label="Item Five" />
      </Tabs>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
        <Tab value="four" label="Item Four" />
        <Tab value="five" label="Item Five" />
      </Tabs>
    </Box>
  );
};

export default ColorTabsDemo;
