import React, { useState } from "react";

import ThemeProvider from "../../../../../ThemeProvider";
import Typography from "../../../../Foundation/Typography/Typography";
import Pagination from "../../../Pagination/Pagination/Pagination";
import Stack from "../../../../Foundation/Layout/Stack/Stack";

const PaginationControlledDemo = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <ThemeProvider>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </ThemeProvider>
  );
};

export default PaginationControlledDemo;
