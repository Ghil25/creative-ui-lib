import React from "react";
import LinearProgress from "../../../Progress/LinearProgress/LinearProgress";
import Stack from "../../../../Foundation/Layout/Stack/Stack";
import ThemeProvider from "../../../../../ThemeProvider";

const LinearProgressDemo = ({ stack, linearProgress, ...props }) => {
  return (
    <ThemeProvider>
      <Stack {...stack} {...props}>
        {linearProgress.map((linear, index) => {
          return <LinearProgress {...linear} key={index} />;
        })}
      </Stack>
    </ThemeProvider>
  );
};

export default LinearProgressDemo;
