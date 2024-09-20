// import { CircularProgress } from "../../../Progress";
// import { Stack } from "../../../../DataDisplay/";
import React from "react";
import CircularProgress from "../../../Progress/CircularProgress/CircularProgress";
import Stack from "../../../../DataDisplay/Avatar/Stack/Stack";
import ThemeProvider from "../../../../../ThemeProvider";
const CircularProgressDemo = ({ stack, circularProgress, ...props }) => {
  return (
    <ThemeProvider>
      <Stack {...stack} {...props}>
        {circularProgress.map((circular, index) => {
          return <CircularProgress {...circular} key={index} />;
        })}
      </Stack>
    </ThemeProvider>
  );
};
export default CircularProgressDemo;
