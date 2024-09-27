import React from "react";
import Pagination from "../../../Pagination/Pagination/Pagination";
import Stack from "../../../../Foundation/Layout/Stack/Stack";
const PaginationDemo = ({ stack, paginations }) => {
  return (
    <Stack {...stack}>
      {paginations.map((pagination, index) => {
        return <Pagination key={index} {...pagination} />;
      })}
      {/* 
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled /> */}
    </Stack>
  );
};

export default PaginationDemo;
