import DataGridDemo from "./components/DataGridStories";
import CustomDataGridDemo from "./components/CustomDataGridStories";
import React from "react";

export default {
  title: "Components/MUI_X/DataGrid",
  component: DataGridDemo,
};

const DataGridDemos = (args) => <DataGridDemo {...args} />;
const CustomDataGridDemos = (args) => <CustomDataGridDemo {...args} />;

export const DataGridBasic = DataGridDemos.bind({});
DataGridBasic.args = {};

export const CustomDataGrid = CustomDataGridDemos.bind({});
CustomDataGrid.args = {};
