import React, { useState } from "react";
import Tabs from "../../../Tabs/Tabs/Tabs";
import Tab from "../../../Tabs/Tab/Tab";
import Box from "../../../../Foundation/Layout/Box/Box";

const ScrollableTabsDemo = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
};

export default ScrollableTabsDemo;
