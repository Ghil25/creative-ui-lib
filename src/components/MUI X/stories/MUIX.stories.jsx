import DataGrid from "./components/DataGridStories";
import React from "react";

export default {
  title: "Components/MUI X/DataGrid",
  component: DataGrid,
};

const DataGridDemo = (args) => <DataGrid {...args} />;

export const DataGridBasic = DataGridDemo.bind({});
DataGridBasic.args = {};
