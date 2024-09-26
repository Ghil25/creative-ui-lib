import React from "react";
import PaginationDemo from "./components/pagination/PaginationStories";
import TablePaginationDemo from "./components/pagination/TablePaginationStories";
import ControlledPaginationStories from "./components/pagination/ControlledPaginationStories";

export default {
  title: "Components/Navigation/Pagination",
  component: PaginationDemo,
};

const PaginationDemos = (args) => <PaginationDemo {...args} />;
const TablePaginationDemos = (args) => <TablePaginationDemo {...args} />;
const ControlledPaginationDemos = (args) => (
  <ControlledPaginationStories {...args} />
);

export const BasicPagination = PaginationDemos.bind({});
BasicPagination.args = {
  stack: {
    direction: "column",
    spacing: 2,
  },
  paginations: [
    {
      count: 10,
    },
    {
      count: 10,
      color: "primary",
    },
    {
      count: 10,
      color: "secondary",
    },
    {
      count: 10,

      disabled: true,
    },
  ],
};

export const OutlinePagination = PaginationDemos.bind({});
OutlinePagination.args = {
  stack: {
    direction: "column",
    spacing: 2,
  },
  paginations: [
    {
      count: 10,
      variant: "outlined",
    },
    {
      count: 10,
      color: "primary",
      variant: "outlined",
    },
    {
      count: 10,
      color: "secondary",
      variant: "outlined",
    },
    {
      count: 10,

      disabled: true,
      variant: "outlined",
    },
  ],
};

export const RoundedPagination = PaginationDemos.bind({});
RoundedPagination.args = {
  stack: {
    direction: "column",
    spacing: 2,
  },
  paginations: [
    {
      count: 10,
      shape: "rounded",
    },
    {
      count: 10,
      color: "primary",
      shape: "rounded",
      variant: "outlined",
    },
  ],
};

export const SizesPagination = PaginationDemos.bind({});
SizesPagination.args = {
  stack: {
    direction: "column",
    spacing: 2,
  },
  paginations: [
    {
      count: 10,
      size: "small",
    },
    {
      count: 10,
    },
    {
      count: 10,
      size: "large",
    },
  ],
};

export const WithButtonsPagination = PaginationDemos.bind({});
WithButtonsPagination.args = {
  stack: {
    direction: "column",
    spacing: 2,
  },
  paginations: [
    {
      count: 10,
      showLastButton: true,
      showFirstButton: true,
    },
    {
      count: 10,
      hidePrevButton: true,
      hideNextButton: true,
    },
  ],
};

export const DefaultPagePagination = PaginationDemos.bind({});
DefaultPagePagination.args = {
  stack: {
    direction: "column",
    spacing: 2,
  },
  paginations: [
    {
      count: 11,
      defaultPage: 6,
      siblingCount: 0,
    },
    {
      count: 11,
      defaultPage: 6,
      siblingCount: 0,
      boundaryCount: 2,
    },
    {
      count: 11,
      defaultPage: 6,
      siblingCount: 0,
      boundaryCount: 2,
    },
    {
      count: 11,
      defaultPage: 6,

      boundaryCount: 2,
    },
  ],
};
export const ControlledPagination = ControlledPaginationDemos.bind({});
ControlledPagination.args = {};

export const TablePagination = TablePaginationDemos.bind({});
TablePagination.args = {};
