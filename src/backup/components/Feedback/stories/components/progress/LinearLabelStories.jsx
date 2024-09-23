import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import LinearProgress from "../../../Progress/LinearProgress";

const LinearProgressWithLabel = ({
  box1,
  box2,
  box3,
  linearProgress,
  typography,
  counts,
  value,
}) => {
  return (
    <Box {...box1}>
      <Box {...box2}>
        <LinearProgress value={value} {...linearProgress} />
      </Box>
      <Box {...box3}>
        <Typography {...typography}>{`${Math.round(counts)}%`}</Typography>
      </Box>
    </Box>
  );
};

const LinearWithValueLabel = ({
  box1,
  box2,
  box3,
  linearProgress,
  typography,
  counts,
  ...props
}) => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <LinearProgressWithLabel
        box1={box1}
        box2={box2}
        box3={box3}
        linearProgress={{ ...linearProgress }}
        typography={typography}
        counts={progress}
        {...props}
        value={progress}
      />
    </Box>
  );
};

export default LinearWithValueLabel;
